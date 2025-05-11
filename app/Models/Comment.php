<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Comment extends Model
{
    /** @use HasFactory<\Database\Factories\CommentFactory> */
    use HasFactory,
        HasRecursiveRelationships;

    protected $fillable = [
        'session_id',
        'commentable_type',
        'commentable_id',
        'user_id',
        'parent_id',
        'language',
        'name',
        'content',
        'approved_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }

    #[Scope]
    public function approved(Builder $q): void
    {
        $q->where(fn ($q) => $q
            ->whereNotNull('approved_at')
            ->when(auth()->check(), fn ($q) => $q->orWhere('user_id', auth()->id()))
            ->when(session(), fn ($q) => $q->orWhere('session_id', session()->getId()))
        );
    }
}
