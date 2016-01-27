<div id="aside" class="app-aside modal fade folded md show-text nav-dropdown">
    <div class="left navside dark" layout="column">
        <div class="navbar no-radius bg-primary m-b-md">
            <a class="navbar-brand">
                <i class="material-icons i28">&#xE90D;</i>
                <span class="hidden-folded inline">Solar CMS</span>
            </a>
        </div>

        <div flex="">
            <nav class="nav-border b-primary">
                <ul class="nav">
                    <li class="active">
                        <a href="{{ URL::route('Solar.Dashboard::index') }}">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE871;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Самбар</span>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="{{ URL::route('Solar.Dashboard::index') }}">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE0E1;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text hidden-lg-up">Имайл</span>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE161;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Контент</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE063;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Медиа</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE01D;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Анализ</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#/app/dashboard">
                            <span class="nav-icon">
                            <i class="material-icons">&#xE24D;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Тайлан</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="nav-icon">
                            <i class="material-icons i24">&#xE8D3;</i>
                            </span>
                            <span class="hidden-lg-up">
                            <span class="nav-text">Хэрэглэгч</span>
                            </span>
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
                    <li>
                        <a class="auto">
                            <span class="nav-icon">
                                <i class="material-icons">&#xE88F;</i>
                            </span>
                            <span class="hidden-lg-up">
                                <span class="nav-text">Тусламж</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ URL::route('Solar::settings') }}" class="auto">
                            <span class="nav-icon">
                                <i class="material-icons">&#xE429;</i>
                            </span>
                            <span class="hidden-lg-up">
                                <span class="nav-text">Тохиргоо</span>
                            </span>
                        </a>
                    </li>

                    <li>
                        <div class="b-b b"></div>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#logout">
                            <span class="nav-icon">
                                <i class="material-icons">&#xE8AC;</i>
                            </span>
                            <span class="hidden-lg-up">
                                <span class="nav-text">Гарах</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</div>