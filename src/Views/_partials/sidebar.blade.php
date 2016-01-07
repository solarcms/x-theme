<div id="aside" class="app-aside modal fade folded md show-text nav-dropdown">
    <div class="left navside dark" layout="column">
        <div class="navbar no-radius bg-primary">
            <a class="navbar-brand">
                <i class="fa fa-modx"></i>
                <span class="hidden-folded inline">Solar CMS</span>
            </a>
        </div>

        <div flex="" class="hide-scroll p-t-md">
            <nav class="scroll ">
                <ul class="nav">
                    <li class="active">
                        <a href="{{ URL::route('Solar.Dashboard::index') }}">
                            <span class="nav-icon">
                                <i class="icon-grid icon"></i>
                            </span>
                            <span class="nav-text">Самбар</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                                <i class="icon-layers icon"></i>
                            </span>
                            <span class="nav-text">Контент</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                                <i class="icon-control-play icon"></i>
                            </span>
                            <span class="nav-text">Медиа</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                                <i class="icon-chart icon"></i>
                            </span>
                            <span class="nav-text">Анализ</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                                <i class="icon-docs icon"></i>
                            </span>
                            <span class="nav-text">Тайлан</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="{{ URL::route('Solar.UserManager::index') }}">
                            <span class="nav-icon">
                                <i class="icon-people icon"></i>
                            </span>
                            <span class="nav-text">Хэрэглэгч</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div flex-no-shrink="">
            <nav>
                <ul class="nav">
                    <li>
                        <div class="b-b b m-v-sm"></div>
                    </li>
                    <li class="no-bg">
                        <a class="auto">
                            <span class="nav-icon">
                                <i class="icon-info icon"></i>
                            </span>
                            <span class="nav-text">Тусламж</span>
                        </a>
                    </li>
                    <li class="no-bg">
                        <a href="{{ URL::route('Solar::settings') }}" class="auto">
                            <span class="nav-icon">
                                <i class="icon-wrench icon"></i>
                            </span>
                            <span class="nav-text">Тохиргоо</span>
                        </a>
                    </li>


                    <li>
                        <div class="b-b b"></div>
                    </li>
                    <li class="no-bg">


                        <a href="#" data-toggle="modal" data-target="#logout">
                            <span class="nav-icon">
                                <i class="icon-power icon"></i>
                            </span>
                            <span class="nav-text">Гарах</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</div>