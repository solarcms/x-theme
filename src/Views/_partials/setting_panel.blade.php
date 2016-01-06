<div class="row-col">

    <div class="navbar dark no-radius">
        <ul class="nav navbar-nav pull-left">
            <li class="nav-item dropdown">
                <a data-toggle="modal" data-target="#aside"
                   class="nav-link p-l b-l hidden-lg-up">
                    <i class="material-icons">menu</i>
                </a>

            </li>
        </ul>
    </div>


    <div class="p-a-xs b-b">
        <div class="input-group">
            <span class="input-group-addon no-border no-bg">
                <i class="fa fa-search"></i>
            </span>
            <input type="text" class="form-control no-border no-bg"
                   placeholder="Хайх">
        </div>
    </div>

    <div class="row-row">
        <div class="row-body scrollable hover">
            <div class="row-inner">
                <div class="navside white r box-shadow-z0 m-b">

                    <div class="nav-stacked nav-active-primary" flex="">
                        <ul class="nav">
                            <li class="nav-header hidden-folded">
                                <span class="text-xs text-muted">Core</span>
                            </li>
                            <li class="active">
                                <a href="{{ URL::route('Solar.TableManager::index') }}">
                                    <span class="nav-icon">
                                        <i class="fa fa-th-large"></i>
                                    </span>
                                    <span>Table manager</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <span class="nav-icon">
                                        <i class="material-icons">tune</i>
                                    </span>
                                    <span>Table properties</span>
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>