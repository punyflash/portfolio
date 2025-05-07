<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Tag extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\TagFactory> */
    use HasFactory,
        HasTranslations,
        InteractsWithMedia,
        Searchable;

    protected $fillable = [
        'title',
        'sort',
    ];

    public $translatable = [
        'title',
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class);
    }

    public function icon(): MorphOne
    {
        return $this->media()->where('collection_name', 'icon')->one()->ofMany();
    }

    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => collect($this->getTranslations('title'))->implode('; '),
        ];
    }
}
