<?php

namespace Solarcms\XTheme\Controllers;

use App\Http\Controllers\Controller;

class XThemeController extends Controller {

    function settings(){
        return view('XTheme::settings');
    }

}