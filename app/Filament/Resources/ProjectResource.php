<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Project;
use App\Models\Tag;
use DB;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Support\Services\RelationshipJoiner;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class ProjectResource extends Resource
{
    use Translatable;

    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title'),
                Forms\Components\TextInput::make('subtitle'),
                Forms\Components\Textarea::make('description')->columnSpanFull(),
                Forms\Components\Select::make('tags')
                    ->multiple()
                    ->relationship('tags', 'title')
                    ->getSearchResultsUsing(static fn (string $search): array => Tag::query()
                        ->select(['id', 'title'])
                        ->whereRaw('EXISTS (SELECT 1 FROM json_each_text(title) AS jt(key, value) WHERE value ILIKE \'%' . $search . '%\')')
                        ->get()
                        ->pluck('title', 'id')
                        ->all()
                    )
                    ->getOptionLabelsUsing(static fn ($values): array => Tag::whereIn('id', $values)->get(['id', 'title'])->pluck('title', 'id')->all())
                    ->searchable()
                    ->columnSpanFull(),
                Forms\Components\DateTimePicker::make('started_at'),
                Forms\Components\DateTimePicker::make('ended_at'),
                Forms\Components\MarkdownEditor::make('content')
                    ->columnSpanFull()
                    ->saveUploadedFileAttachmentsUsing(static fn ($record, $file) => tap(
                        $record->addMedia($file)
                            ->usingFileName($file->getClientOriginalName())
                            ->toMediaCollection('content', 'public'),
                        fn () => $file->delete(),
                    ))
                    ->getUploadedAttachmentUrlUsing(static fn ($file) => $file->getUrl()),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('created_at'),
                Tables\Columns\TextColumn::make('updated_at'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
