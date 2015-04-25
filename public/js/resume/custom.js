(function ($) {
    "use strict";

    (function ($) {
        $(function () {
            jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
            jQuery('#loopedSlider').loopedSlider({
                autoHeight: 500
            });
        });
    });

// for banner height js
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.banner').css({'width': windowWidth, 'height': windowHeight});
    $(window).load(function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
    jQuery(function ($) {
        var $chosenSheet,
            $stylesheets = $("a[id^=theme-]");

        // run rlightbox
        $(".lb").rlightbox();
        $(".lb_title-overwritten").rlightbox({overwriteTitle: true});
    });
    $(document).ready(function (e) {
        var index = 0;
        $(document).scroll(function () {
            //console.log($('header').height());
            var top = $(window).scrollTop() > $('header').height();
            if (top) {
                if (index == 0) {
                    $('.chart').easyPieChart({
                        easing: 'easeOutBounce',
                        onStep: function (from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });

                }
                index++;
            }
        });
    });


// Somth page scroll
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
        /*留言*/
        $('#submit').click(function(){
            if($('#name').val()&&$('#comments').val()){
                $.post('/leaveWords',{
                    name:$('#name').val(),
                    comments:$('#comments').val()
                },function(data){
                    if(data.status=='success'){
                        $('#name').val('');
                        $('#comments').val('');
                        swal("Good job!", "Thanks for your comments!", "success");
                    }
                })
            }

        })
    });


// chart loding
    $(window).load(function () {

        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function () {
            chart.update(Math.random() * 100);
        });
    });


}(jQuery));
