<?php

namespace App\Filament\Resources\ProjectResource\Pages;

use App\Filament\Resources\ProjectResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProject extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = ProjectResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function afterSave(): void
    {
        /** @var \App\Models\Project $model */
        $model = $this->getRecord();

        $content = $model->getTranslations('content');

        $links = [];

        foreach ($content as $translation) {
            preg_match_all('/!\[.*?\]\((.*?)\)/', $translation, $matches);
            $links = array_merge($links, $matches[1]);
        }

        $model->getMedia('content')->lazy()->each(static function ($media) use ($links) {
            $links = array_filter($links, static fn ($link) => str_ends_with($media->getUrl(), $link));
            if (empty($links)) {
                $media->delete();
            }
        });
    }
}
