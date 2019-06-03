$(document).ready(function() {
    $('.link-mouse').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 800);
        return false;
    });
    $('.slick-slider').slick({
        prevArrow: $('.carousel-control-prev'),
        nextArrow: $('.carousel-control-next'),
    });


    $('.navbar-toggler').click(function() {
        $('.nav_close').removeAttr('style');
        $('body').css({'overflow': 'hidden'})
        $('.navbar-collapse').slideToggle(600, 'linear', function () {
            $(this).css({'display':'flex'})
        });
    })


    $('.nav_close').click(function () {
        $(this).css({'transform': 'rotate(-225deg)'});
        $('body').removeAttr('style');
        setTimeout(function () { 
            $('.navbar-collapse').slideToggle(600, 'linear', function () {
                $(this).removeAttr('style');
            });
        }, 50);
    })

    $('.btn-join').click(function () {
        $('.modal_close').removeAttr('style');
        $('body').css({ 'overflow': 'hidden' })
        $('.modal-window').slideToggle(600, 'linear', function () {
            $(this).css({ 'display': 'block' })
        });
    })
    $('.modal_close').click(function () {
        $(this).css({ 'transform': 'rotate(-225deg)' })
        $('body').removeAttr('style');
        setTimeout(function () {
            $('.modal-window').slideToggle(600, 'linear', function () {
                $(this).removeAttr('style');
            });
        }, 50);
    })

    $('.nav-item').mouseenter(function() {
        $(this).find('.line-nav-link').css({ 'border-color': '#aa8d37', 'width': '78px',})
        $(this).find('.nav-link, .number').css({ 'color': '#aa8d37' })
    })
    .mouseleave(function () {
        $(this).find('.line-nav-link').removeAttr('style');
        $('.nav-link, .number').removeAttr('style');
    })
})