<?php
/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 1/5/16
 * Time: 9:09 PM
 */

Route::group([
    'namespace' => 'Solarcms\XTheme\Controllers',
    'prefix' =>'solar',
    'as' => 'Solar::',
    'middleware' => 'auth'], function() {

    Route::get('settings', ['as' => 'settings', 'uses' => 'XThemeController@settings']);

});