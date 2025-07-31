<?php

namespace App\Filament\Resources\BlogPostResource\Pages;

use App\Filament\Resources\BlogPostResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;
use LaraZeus\SpatieTranslatable\Resources\Pages\ListRecords\Concerns\Translatable;

class ListBlogPosts extends ListRecords
{
    use Translatable;

    protected static string $resource = BlogPostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            LocaleSwitcher::make(),
            CreateAction::make(),
        ];
    }
}
