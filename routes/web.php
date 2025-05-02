<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::localizedGroup(function () {
    Route::get('/', HomeController::class)->name('home');
    Route::resource('projects', ProjectController::class)->only(['index', 'show']);
    Route::resource('contact', ContactController::class)->only(['index', 'store']);
    Route::resource('blog', BlogController::class)->only(['index', 'show'])
        ->parameters(['blog' => 'post']);
});
