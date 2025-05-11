<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use App\Models\Comment;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Blog/Index', [
            'posts' => Inertia::deepMerge(
                fn () => BlogPostResource::collection(
                    BlogPost::where('published_at', '<=', now())
                        ->with('banner')
                        ->orderBy('published_at', 'desc')
                        ->select(['id', 'title', 'slug', 'subtitle', 'description', 'published_at'])
                        ->cursorPaginate(12),
                )
            ),
        ]);
    }

    public function show(BlogPost $post)
    {
        return Inertia::render('Blog/Show', [
            'post' => fn () => $post->toResource(),
            'comments' => fn () => Comment::treeOf(
                fn ($q) => $q->whereNull('parent_id')
                    ->where('commentable_id', $post->id)
                    ->where('commentable_type', BlogPost::class)
                    ->where('language', app()->getLocale())
                    ->approved()
            )->where('language', app()->getLocale())->approved()->get()->toTree()->toResourceCollection(),
        ]);
    }
}
