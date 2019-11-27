<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// TODO put some group here for games 

Route::get('games', 'GameController@getAllGames');
Route::get('games/{id}', 'GameController@getGame');
Route::post('games', 'GameController@createGame');
Route::put('games/{id}', 'GameController@updateGame');
Route::delete('games/{id}','GameController@deleteGame');

