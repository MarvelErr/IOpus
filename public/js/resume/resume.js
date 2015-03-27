/**
 * Created by luwenxu on 2015/3/27.
 */
$(function () {
    var containerHeight = $(window).height() > 650 ? $(window).height() : 650;
    $('.full').css('height', containerHeight);
    $('.more-top').css('margin-top', containerHeight * 0.12);
    $('.tlt').textillate();

    function setOpacity(ele) {
        var skills = $('.skill');
        skills.each(function () {
            if (this == ele) {
                $(this).css({'opacity': '1', 'transform': 'rotateY(0deg)'});
                $(this).find('.skill-left').addClass('text-center');
            } else {
                $(this).css({'opacity': '0.8', 'transform': 'rotateY(-5deg)'});
                $(this).find('.skill-left').removeClass('text-center');
            }
        })
    }
    console.log($(window).scrollTop());
    console.log($('.second-stage').offset());
    /*监听滚动事件*/
    ($(window).scrollTop()>$('.second-stage').offset().top)&&$('.skill-one').trigger('click');
    $(window).scroll(function(){
        if($(this).scrollTop()>$('.second-stage').offset().top){
            $('.skill-one').trigger('click');
            $(this).unbind('scroll');
        }
    });

    //$('.skill-one').trigger('click');
    $('.skill-one').click(function () {
        setOpacity(this);
        $('.skill-two').css('margin-left', '75%');
        $('.skill-three').css('margin-left', '83.333%');
        $('.skill-four').css('margin-left', '91.666%');
    });
    $('.skill-two').click(function () {
        setOpacity(this);
        $(this).css('margin-left', '8.333%');
        $('.skill-three').css('margin-left', '83.333%');
        $('.skill-four').css('margin-left', '91.666%');
    });
    $('.skill-three').click(function () {
        setOpacity(this);
        $('.skill-two').css('margin-left', '8.333%');
        $(this).css('margin-left', '16.666%');
        $('.skill-four').css('margin-left', '91.666%');
    });
    $('.skill-four').click(function () {
        setOpacity(this);
        $('.skill-two').css('margin-left', '8.3333%');
        $('.skill-three').css('margin-left', '16.666%');
        $(this).css('margin-left', '24.999%');
    })
});