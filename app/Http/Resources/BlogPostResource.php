<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\BlogPost */
class BlogPostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'subtitle' => $this->subtitle,
            'banner' => $this->whenLoaded('banner', fn () => $this->banner->getUrl()),
            'description' => $this->description,
            'content' => $this->whenNotNull($this->content),
            'published_at' => $this->published_at,
        ];
    }
}
