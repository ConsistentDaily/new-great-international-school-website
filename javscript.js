<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


    $(document).ready(function() {
        $('.navbar-toggler').on('click', function() {
            $('.fas.fa-times').toggle();
        });

        $('.navbar-nav .nav-item .nav-link').on('click', function() {
            $('.navbar-collapse').collapse('hide');
            $('.fas.fa-times').hide();
        });
    });


/*--------------------enquiry----------------*/
