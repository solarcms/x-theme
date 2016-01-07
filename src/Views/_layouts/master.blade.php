<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>{{ $pageTitle or 'Solar CMS' }}</title>
    <meta name="description" content="Financial soft"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @if(Config::get('xconfig.xdebug'))
        <link rel="stylesheet" href="http://localhost:3000/css/vendor.css">
        <link rel="stylesheet" href="http://localhost:3000/css/app.css">
    @else
        <link rel="stylesheet" href="{{ URL::asset('shared/css/vendor.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('shared/css/app.css') }}">
    @endif

    @yield('style')
    {{--<script src="http://maps.google.com/maps/api/js?v=3&sensor=true"></script>--}}
</head>
<body>

<div class="pace  pace-inactive">
    <div class="pace-progress" data-progress-text="100%" data-progress="99"
         style="transform: translate3d(100%, 0px, 0px);">
        <div class="pace-progress-inner"></div>
    </div>
    <div class="pace-activity"></div>
</div>

<div class="app">
    @include('XTheme::_partials.sidebar')

    <div id="content" class="app-content box-shadow-z3" role="main">
        @yield('content')
    </div>
</div>

@include('XTheme::_partials.modal')

@if(Config::get('xconfig.xdebug'))
    <script src="http://localhost:3000/js/vendor.js"></script>
    <script src="http://localhost:3000/js/app.js"></script>
@else
    <script src="{{ URL::asset('shared/js/vendor.js') }}"></script>
    <script src="{{ URL::asset('shared/js/app.js') }} "></script>
@endif

@yield('script')
</body>
</html>
