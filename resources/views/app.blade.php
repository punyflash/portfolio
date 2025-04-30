<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite(['resources/src/app.ts', "resources/src/pages/{$page['component']}.svelte"])
    @inertiaHead
  </head>
  <body>
    <noscript>
        <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    @inertia
  </body>
</html>
