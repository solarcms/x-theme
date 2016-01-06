@extends('XTheme::_layouts.master')

@section('content')

    <div class="app-body" id="view">
        <div class="app-body-inner">

            <div class="row-col row-col-xs b-b">
                <div class="col-sm-3 col-md-2 white b-r">
                    @include('Dashboard::_partials.dash_panel')
                </div>

                <div class="col-sm-9 col-md-10 map-outer-wrapper">
                    @include('Dashboard::_partials.dash_header')
                    <div style="height: 100%; width: 100%">

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection