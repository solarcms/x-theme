@extends('XTheme::_layouts.master')

@section('content')

    <div class="app-body" id="view">
        <div class="app-body-inner">

            <div class="row-col row-col-xs b-b">
                <div class="col-sm-3 col-md-2 white b-r">
                    @include('XTheme::_partials.setting_panel')
                </div>

                <div class="col-sm-9 col-md-10 map-outer-wrapper">

                </div>
            </div>
        </div>
    </div>

@endsection