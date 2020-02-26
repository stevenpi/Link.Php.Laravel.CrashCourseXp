<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Routing\Route as IlluminateRoute;
use Illuminate\Routing\Matching\UriValidator;
Use App\CaseInsensitiveUriValidator;


$validators = IlluminateRoute::getValidators();
$validators[] = new CaseInsensitiveUriValidator;
IlluminateRoute::$validators = array_filter($validators, function($validator) {
    return get_class($validator) != UriValidator::class;
});

Route::get('{any}', function () {
    return view('app');
})->where('any', '^((?!api).)*');
