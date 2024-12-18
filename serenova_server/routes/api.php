<?php

use App\Http\Controllers\ambientController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\KalenderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);



// Route::post('/resetEmail', [AuthController::class, 'send_reset']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/Authuser', [AuthController::class, 'getUser']);

    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/{id}', [UserController::class, 'show']);

    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'delete']);

    Route::get('/kalender', [KalenderController::class, 'index']);
    Route::get('/kalender/{id}', [KalenderController::class, 'show']);

    Route::get('/kalender/new', [KalenderController::class, 'new']);

    Route::post('/kalender/add', [KalenderController::class, 'store']);
    Route::put('/kalender/{id}', [KalenderController::class, 'update']);
    Route::delete('/kalender/{id}', [KalenderController::class, 'delete']);

    Route::get('/jadwal', [JadwalController::class, 'index']);
    Route::get('/jadwal/{id}', [JadwalController::class, 'show']);

    Route::post('/jadwal/add', [JadwalController::class, 'store']);
    Route::put('/jadwal/{id}', [JadwalController::class, 'update']);
    Route::delete('/jadwal/{id}', [JadwalController::class, 'delete']);

    Route::get('/warningNotif', [JadwalController::class, 'warningNotif']);
    Route::get('/todayTask', [JadwalController::class, 'todayTask']);
    Route::get('/notif', [JadwalController::class, 'todayEmail']);
    Route::get('/count', [JadwalController::class, 'countJenis']);

    Route::get('/ambient',[ambientController::class, 'getAmbientMP3']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
