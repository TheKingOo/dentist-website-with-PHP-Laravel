<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\RendezVousController;

Route::resource('home', HomeController::class);
Route::resource('about', AboutController::class);
Route::resource('services', ServiceController::class);
Route::resource('doctor', DoctorController::class);
Route::resource('rendez-vous', RendezVousController::class);