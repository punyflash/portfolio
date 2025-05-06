<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

/** @mixin \App\Models\Comment */
class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => [
                'name' => $name = $this->whenLoaded('user', fn () => $this->user->name, $this->name),
                'avatar' => $this->avatar($name),
            ],
            'permissions' => [
                'edit' => Gate::check('update', $this->resource),
                'delete' => Gate::check('delete', $this->resource),
            ],
            'content' => $this->content,
            'children' => $this->whenLoaded('children', fn () => static::collection($this->children)),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    protected function avatar(string $name): string
    {
        $name = urlencode($name);

        return "https://api.dicebear.com/9.x/identicon/svg?seed={$name}";
    }
}
