<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use LaravelLang\Locales\Facades\Locales;
use Spatie\Honeypot\Honeypot;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'locale' => fn () => [
                'current' => app()->getLocale(),
                'fallback' => app()->getFallbackLocale(),
                'canonical' => $this->getCanonicalUrl($request),
                'translations' => $this->getRouteTranslations($request),
            ],
            'honeypot' => static fn () => app(Honeypot::class),
            'flash.success' => static fn () => $request->session()->get('success'),
        ];
    }

    protected function getCanonicalUrl(Request $request): ?string
    {
        $route = $request->route()->getName();

        if (! str_starts_with($route, config('localization.routes.name_prefix'))) {
            return null;
        }

        $route = str_replace(config('localization.routes.name_prefix'), '', $route);
        $parameters = $request->route()->parameters();

        unset($parameters['locale']);

        return route($route, $parameters);
    }

    protected function getRouteTranslations(Request $request): array
    {
        $route = $request->route()->getName();

        if (! str_starts_with($route, config('localization.routes.name_prefix'))) {
            $route = config('localization.routes.name_prefix') . $route;
        }

        return Locales::installed()
            ->mapWithKeys(static fn ($locale) => [
                $locale->code => route($route, [
                    ...$request->route()->parameters(),
                    'locale' => $locale->code
                ]),
            ])
            ->all();
    }
}
