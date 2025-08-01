<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\User;

class CommentPolicy
{
    protected function isUsersComment(?User $user, Comment $comment): bool
    {
        return $comment->user()->is($user) ||
            rescue(fn () => $comment->session_id === request()->session()->getId(), false, false);
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Comment $comment): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(?User $user, Comment $comment): bool
    {
        return $this->isUsersComment($user, $comment);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(?User $user, Comment $comment): bool
    {
        return $this->isUsersComment($user, $comment);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(?User $user, Comment $comment): bool
    {
        return $this->isUsersComment($user, $comment);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(?User $user, Comment $comment): bool
    {
        return $this->isUsersComment($user, $comment);
    }
}
