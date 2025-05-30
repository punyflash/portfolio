<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <x-gtag :gtag="config('services.google.gtag')" :addsense="config('services.google.addsense')" />
        @vite(['resources/src/app.svelte.ts', "resources/src/pages/{$page['component']}.svelte"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
