<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Project */
class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'tags' => $this->whenLoaded('tags', fn () => TagResource::collection($this->tags)),
            'subtitle' => $this->whenNotNull($this->subtitle),
            'content' => $this->whenNotNull($this->content),
            'started_at' => $this->whenNotNull($this->started_at),
            'ended_at' => $this->whenNotNull($this->ended_at),
            'created_at' => $this->whenNotNull($this->created_at),
            'updated_at' => $this->whenNotNull($this->updated_at),
        ];
    }
}
