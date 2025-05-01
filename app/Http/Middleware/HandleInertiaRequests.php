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
            'locale' => [
                'default' => app()->getLocale(),
                'fallback' => app()->getFallbackLocale(),
            ],
            'honeypot' => static fn () => app(Honeypot::class),
            ...parent::share($request),
            'flash.success' => static fn () => $request->session()->get('success'),
        ];
    }
}
