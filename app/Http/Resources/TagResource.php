<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Tag */
class TagResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'icon' => $this->whenLoaded('icon', fn () => $this->icon->getUrl()),
        ];
    }
}
