(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 5) {
                $('#hidingmenu').fadeOut(1000);
            } else {
                $('#hidingmenu').fadeIn(1000);
            }
        });
    });
})(jQuery);