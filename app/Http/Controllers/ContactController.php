<?php

namespace App\Http\Controllers;

use App\Notifications\ContactFormNotification;
use Illuminate\Http\Request;
use Illuminate\Notifications\AnonymousNotifiable;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['nullable', 'phone:INTERNATIONAL'],
            'message' => ['required'],
        ]);

        defer(static fn () => collect(config('services.contact'))
            ->filter()
            ->reduce(
                static fn (AnonymousNotifiable $n, $value, string $route) => $n->route($route, $value),
                new AnonymousNotifiable,
            )->notify(new ContactFormNotification($data))
        );

        return $request->wantsJson() ?
            response()->json(['success' => true]) :
            redirect()->back()->with('success', trans('Your message has been sent!'));
    }
}
