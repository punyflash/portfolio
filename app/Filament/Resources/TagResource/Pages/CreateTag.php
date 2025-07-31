<?php

namespace App\Filament\Resources\TagResource\Pages;

use App\Filament\Resources\TagResource;
use Filament\Resources\Pages\CreateRecord;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;
use LaraZeus\SpatieTranslatable\Resources\Pages\CreateRecord\Concerns\Translatable;

class CreateTag extends CreateRecord
{
    use Translatable;

    protected static string $resource = TagResource::class;

    protected function getActions(): array
    {
        return [
            LocaleSwitcher::make(),
        ];
    }
}
