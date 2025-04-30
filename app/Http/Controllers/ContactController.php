<?php

namespace App\Http\Controllers;

use App\Notifications\ContactFormNotification;
use Illuminate\Http\Request;
use Illuminate\Notifications\AnonymousNotifiable;

class ContactController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['nullable', 'phone:INTERNATIONAL'],
            'message' => ['required'],
        ]);

        defer(static fn () => new AnonymousNotifiable()
            ->route('mail', 'puny.flash@gmail.com')
            ->notify(new ContactFormNotification($data))
        );

        return $request->wantsJson() ?
            response()->json(['success' => true]) :
            redirect()->back()->with('success', trans('Your message has been sent!'));
    }
}
