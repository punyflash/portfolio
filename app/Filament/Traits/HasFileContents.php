<?php

namespace App\Filament\Traits;

use Filament\Resources\Pages\Page;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/** @mixin \Filament\Resources\Pages\EditRecord */
trait HasFileContents
{
    public ?array $temporaryUrls = [];

    protected function afterSave(): void
    {
        $model = $this->getRecord();

        $content = $model->getTranslations('content');

        $links = [];

        foreach ($content as $translation) {
            preg_match_all('/!\[.*?\]\((.*?)\)/', $translation, $matches);
            $links = array_merge($links, $matches[1]);

            // <img src="..." />
            preg_match_all('/<img.*?src="(.*?)".*?>/', $translation, $matches);
            $links = array_merge($links, $matches[1]);
        }

        $model->getMedia('content')->lazy()->each(static function ($media) use ($links) {
            $links = array_filter($links, static fn ($link) => str_ends_with($media->getUrl(), $link));
            if (empty($links)) {
                $media->delete();
            }
        });
    }

    public static function createMedia(?HasMedia $record, TemporaryUploadedFile $file, Page $livewire)
    {
        $path = $file->storeAs('tmp', $file->getClientOriginalName(), ['disk' => 'public']);

        $livewire->temporaryUrls[$path] = $url = $file->temporaryUrl();

        return $url;
    }

    protected function afterCreate(): void
    {
        $record = $this->getRecord();
        $content = $record->getAttributeValue('content');

        foreach ($this->temporaryUrls as $path => $url) {
            $media = $record->addMedia(Storage::disk('public')->path($path))->toMediaCollection('content', 'public');

            $content = str_replace($url, $media->getUrl(), $content);

            Storage::disk('public')->delete($path);
        }

        $record->forceFill(['content' => $content])->save();
    }
}
