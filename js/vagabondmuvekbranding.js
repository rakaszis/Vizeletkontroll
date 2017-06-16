(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() < 2000) {
                $('#vagabond-brand').fadeOut(1500);
            } else {
                $('#vagabond-brand').fadeIn(1500);
            }
        });
    });
})(jQuery);

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 50) {
                $('.hidingmenu').fadeIn(15000);
            } else {
                $('.hidingmenu').fadeOut(50);
            }
        });
    });
})(jQuery);