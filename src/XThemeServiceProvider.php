<?php
/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 11/11/15
 * Time: 11:31 AM
 */

namespace Solarcms\XTheme;

use Illuminate\Support\ServiceProvider as ServiceProvider;

class XThemeServiceProvider extends ServiceProvider
{

    public function boot()
    {

        include __DIR__ . DIRECTORY_SEPARATOR .'routes.php';

        // For publishin config file
        $this->publishes([
            __DIR__.'/Config/xconfig.php' => config_path('xconfig.php'),
        ], 'xconfig');

        // For publishing assets
        $this->publishes([
            __DIR__ . DIRECTORY_SEPARATOR . 'Assets'. DIRECTORY_SEPARATOR . 'dist' => public_path('shared'),
        ], 'shared');
    }

    public function register()
    {
        $this->mergeConfigFrom( __DIR__.'/Config/xconfig.php', 'xconfig');
        $this->loadViewsFrom(__DIR__ . DIRECTORY_SEPARATOR .'Views', 'XTheme');
    }
}