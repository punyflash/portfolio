<?php

namespace App\Listeners;

use App\Models\Comment;
use Illuminate\Auth\Events\Registered;

class AttachCommentsToNewUser
{
    public function handle(Registered $event): void
    {
        Comment::where('session_id', request()->session()->getId())->update(['user_id' => $event->user->getAuthIdentifier()]);
    }
}
