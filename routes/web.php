<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::localizedGroup(function () {
    Route::inertia('/', 'Home')->name('home');
    Route::resource('projects', ProjectController::class)->only(['index', 'show']);
    Route::resource('contact', ContactController::class)->only(['index', 'store']);
});
