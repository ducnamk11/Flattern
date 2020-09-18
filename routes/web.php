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

Route::get('/', function () {
    return view('welcome');
});


//Route::get('/{path}', 'HomeController@index')->where('path', '.*');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//CATEGORY
Route::post('/add-category', 'CategoryController@store');
Route::get('/category', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@delete');
Route::get('/editcategory/{id}', 'CategoryController@edit');
Route::post('/update-category/{id}', 'CategoryController@update');
//Post
Route::get('/post', 'PostController@index');
Route::post('/add-category', 'CategoryController@store');
Route::get('/category/{id}', 'CategoryController@delete');
Route::get('/editcategory/{id}', 'CategoryController@edit');
Route::post('/update-category/{id}', 'CategoryController@update');






