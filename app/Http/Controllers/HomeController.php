<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home', [
            'tags' => fn () => Tag::with('icon')->orderBy('sort')->get()->toResourceCollection(),
        ]);
    }
}
