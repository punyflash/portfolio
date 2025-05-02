<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Blog/Index', [
            'posts' => Inertia::deepMerge(
                fn() => BlogPostResource::collection(
                    BlogPost::where('published_at', '<=', now())
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
            'post' => fn() => new BlogPostResource($post),
        ]);
    }
}
