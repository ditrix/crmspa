<?php

use App\Http\Controllers\Api\PermissionController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ParamerStatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('permissions',PermissionController::class);

Route::apiResource('users',UserController::class);

Route::apiResource('parameter_status',ParamerStatusController::class);


