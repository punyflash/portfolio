<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Comment::class);
        $this->middleware('throttle:1,1')->only(['store']);
    }

    public function store(Request $request, ?BlogPost $post = null, ?Comment $comment = null)
    {
        abort_unless((bool) ($relation = $post?->comments() ?? $comment?->children()), 404);

        $data = $request->validate([
            'content' => ['required', 'string'],
            'name' => [Rule::requiredIf(! $name = $request->user()?->name), 'string'],
        ]);

        $comment = $relation->create([
            'session_id' => $request->session()->getId(),
            'user_id' => $request->user()?->id,
            'language' => app()->getLocale(),
            'content' => $data['content'],
            'name' => $data['name'] ?? $name,
        ]);

        return redirect()->back()->with('success', trans('Comment created successfully!'))
            ->with('hash', 'comment-'.$comment->id);
    }

    public function update(Request $request, Comment $comment)
    {
        $data = $request->validate([
            'content' => ['required', 'string'],
            'name' => [Rule::requiredIf(! $name = $request->user()?->name), 'string'],
        ]);

        $comment->update([
            'content' => $data['content'],
            'name' => $data['name'] ?? $name,
        ]);

        return redirect()->back()->with('success', trans('Comment updated successfully!'))
            ->with('hash', 'comment-'.$comment->id);
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();

        return redirect()->back()->with('success', trans('Comment deleted successfully!'));
    }
}
