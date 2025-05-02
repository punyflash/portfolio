<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasTranslatableSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Translatable\HasTranslations;

class BlogPost extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\BlogPostFactory> */
    use HasFactory,
        HasTranslatableSlug,
        HasTranslations,
        InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'content',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public $translatable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'content',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function banner(): MorphOne
    {
        return $this->media()->where('collection_name', 'banner')->one()->ofMany();
    }
}
