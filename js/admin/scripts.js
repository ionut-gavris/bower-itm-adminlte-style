$(document).ready(function() {
    $('.dataTable').on('show.bs.dropdown', function () {
        if (window.innerWidth >= 1200) {
            $('.dataTable').parent().css( "overflow", "inherit" );
        }

    });
    $('.dataTable').on('hide.bs.dropdown', function () {
        if (window.innerWidth >= 1200) {
            $('.dataTable').parent().css( "overflow-y", "auto" );
        }
    });
});