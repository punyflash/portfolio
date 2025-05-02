<?php

namespace App\Filament\Traits;

/** @mixin \Filament\Resources\Pages\EditRecord */
trait CleansUpUnusedMedia
{
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
}
