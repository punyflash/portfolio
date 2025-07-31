<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages\CreateProject;
use App\Filament\Resources\ProjectResource\Pages\EditProject;
use App\Filament\Resources\ProjectResource\Pages\ListProjects;
use App\Models\Project;
use App\Models\Tag;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use LaraZeus\SpatieTranslatable\Resources\Concerns\Translatable;

class ProjectResource extends Resource
{
    use Translatable;

    protected static ?string $model = Project::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title'),
                TextInput::make('subtitle'),
                Textarea::make('description')->columnSpanFull(),
                Select::make('tags')
                    ->multiple()
                    ->relationship('tags', 'title')
                    ->getSearchResultsUsing(static fn (string $search): array => Tag::query()
                        ->select(['id', 'title'])
                        ->whereRaw('EXISTS (SELECT 1 FROM json_each_text(title) AS jt(key, value) WHERE value ILIKE \'%'.$search.'%\')')
                        ->get()
                        ->pluck('title', 'id')
                        ->all()
                    )
                    ->getOptionLabelsUsing(static fn ($values): array => Tag::whereIn('id', $values)->get(['id', 'title'])->pluck('title', 'id')->all())
                    ->searchable()
                    ->columnSpanFull(),
                DateTimePicker::make('started_at'),
                DateTimePicker::make('ended_at'),
                MarkdownEditor::make('content')
                    ->columnSpanFull()
                    ->saveUploadedFileAttachmentsUsing(CreateProject::createMedia(...))
                    ->getUploadedAttachmentUrlUsing(static fn ($file) => $file),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('title'),
                TextColumn::make('created_at'),
                TextColumn::make('updated_at'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListProjects::route('/'),
            'create' => CreateProject::route('/create'),
            'edit' => EditProject::route('/{record}/edit'),
        ];
    }
}
