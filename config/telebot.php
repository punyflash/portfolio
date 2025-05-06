<?php

return [
    /*-------------------------------------------------------------------------
    | Default Bot Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the bots you wish to use as
    | your default bot for regular use.
    |
    */

    'default' => 'bot',

    /*-------------------------------------------------------------------------
    | Middleware to be applied to the webhook route
    |--------------------------------------------------------------------------
    |
    |
    */
    'middleware' => [],

    /*-------------------------------------------------------------------------
    | Your Telegram Bots
    |--------------------------------------------------------------------------
    | You may use multiple bots. Each bot that you own should be configured here.
    |
    | See the docs for parameters specification:
    | https://westacks.github.io/telebot/#/configuration
    |
    */

    'bots' => [
        'bot' => [
            'token' => env('TELEGRAM_BOT_TOKEN'),
            'name' => env('TELEGRAM_BOT_NAME', null),
        ],
    ],
];
