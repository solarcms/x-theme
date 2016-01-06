
<div id="logout" class="modal fade" data-backdrop="true">
    <div class="modal-dialog p-a-lg">
        <div class="modal-content clearfix p-a-md box-shadow-z3">
            <div class="modal-body text-center">
                <a href="javascript:void(0)" data-dismiss="modal">
                    <i class="fa fa-rotate-right"></i>
                    <span>Буцах</span>
                </a>

                <a href="{{ URL::route('Solar.Auth::logout') }}">
                    <i class="fa fa-power-off"></i>
                    <span>Гарах</span>
                </a>
            </div>
        </div>
    </div>
</div>