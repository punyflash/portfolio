<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Spatie\Honeypot\Honeypot;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'honeypot' => static fn () => app(Honeypot::class),
            'flash.success' => static fn () => $request->session()->get('success'),
        ];
    }
}
