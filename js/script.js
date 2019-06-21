$(document).ready(function() {

    // маска для телефона
    $('input[name="phone"]').each(function() {
        $('input[name="phone"]').mask("+7 (999) 999-99-99");
    })


    //animate
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top - 100 + "px" }, 1000);
        return false;
    });

    //Всплывающие окна
    $('li .nav-menu__link').mouseenter(function() {
        setTimeout(function () { }, 100);
        $(this).find('hr').css({ 'width': '78px', 'background-color': '#aa8d37', 'border-color': '#aa8d37' });
        $(this).find('.number').css({ 'color': '#aa8d37' });
        $(this).css({ 'color': '#aa8d37'});
    })
    .mouseleave(function() {
        $(this).find('hr').removeAttr("style");
        $(this).find('.number').removeAttr("style");
        $(this).removeAttr("style");
    })

    $('.nav-close').click(function() {
        $('.nav-menu').removeClass('fadeInRight animated');
        $('.nav__bg').removeClass('fadeInLeft animated');
        $('.nav-menu').addClass('fadeOutRight animated');
        $('.nav__bg').addClass('fadeOutLeft animated');
        $('body').removeAttr('style');
        $('.navbar-toggle').slideToggle(800, function() {
        })
    })
    $('.popup-contactform__close').click(function () {
        $('.popup-contactform').removeClass('fadeInRight animated');
        $('.popup-content').removeClass('fadeInLeft animated');
        $('.popup-contactform').addClass('fadeOutRight animated');
        $('.popup-content').addClass('fadeOutLeft animated');
        $('body').removeAttr('style');
        $('.popup__btn').slideToggle( 700, function () {
        })
    })

    //header
    $('.btn__navbar-toggle').mouseenter(function () {
        $(this).find('span').css({ 'background-color':'#aa8d37'})
    })
    .mouseleave(function () {
        $(this).find('span').removeAttr("style");

    })
    $('.btn__navbar-toggle').click(function () {
        $('.nav-menu').removeClass('fadeOutRight animated');
        $('.nav__bg').removeClass('fadeOutLeft animated');
        $('.nav-menu').addClass('fadeInRight animated');
        $('.nav__bg').addClass('fadeInLeft animated');
        $('body').css({ 'overflow': 'hidden'})
        $('.navbar-toggle').slideToggle(800, function () {
            if($(this).css({'display':'block'})) {
                $(this).css({ 'display': 'flex' })
            }
        })
    })
    $('.btn__presoed').click(function () {
        $('.popup-contactform').removeClass('fadeOutRight animated');
        $('.popup-content').removeClass('fadeOutLeft animated');
        $('.popup-contactform').addClass('fadeInRight animated');
        $('.popup-content').addClass('fadeInLeft animated');
        $('body').css({ 'overflow': 'hidden' })
        $('.popup__btn').slideToggle(700, function () {
            if ($(this).css({ 'display': 'block' })) {
                $(this).css({ 'display': 'flex' })
            }
        })
    })

    //tabs
    $(".tabs").on("click", ".tab__link", function () {

        // Удаляем классы active
        $('.tab__link').removeClass("active");
        $('.tab').removeClass("active");

        // Добавляем классы active
        $(this).addClass("active");
        $('.tab').eq($(this).index()).addClass("active");

        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
            }
        );
        wow.init();

        $("html, body").animate({ scrollTop: $('#tabs').offset().top - 100 + "px" }, 1000);

        return false;
    });

    //настройка 1 и 3 слайдеров

    var margin = $('.section-face, .section-events').find('.container').css('margin-right')
    width = $('.section-face, .section-events').find('.container').css('width')
    jqBar = $('.section-face, .section-events'); // селектор для вашего блока
    jqBarStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) {
            jqBarStatus = false;
            width = parseInt(width) + parseInt(margin)
            $('.section-face, .section-events').find('.container').css({ 'max-width': width })
            $('.section-face, .section-events').find('.container').css({ 'margin-right': '0' })
            console.log(width)

        }
    });

    //section-face__slider

    var jqBar1 = $('.section-face') // селектор для вашего блока
    jqBarStatus1 = true

    $(window).scroll(function () {
        var scrollEvent1 = ($(window).scrollTop() > (jqBar1.position().top - $(window).height()));
        if (scrollEvent1 && jqBarStatus1) {
            jqBarStatus1 = false;

            var owl = $(".section-face__slider");
            owl.owlCarousel({
                items: 1.3,
                loop: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1300,
                autoplayTimeout: 4000,
            });
            $(".section-face_next").click(function () {
                owl.trigger("next.owl.carousel");

            });
            $(".section-face_prev").click(function () {
                owl.trigger("prev.owl.carousel");
            });

        }
    });

    //section-progress__slider

    var jqBar2 = $('.section-progress') // селектор для вашего блока
        jqBarStatus2 = true

    $(window).scroll(function () {
        var scrollEvent2 = ($(window).scrollTop() > (jqBar2.position().top - $(window).height()));
        if (scrollEvent2 && jqBarStatus2) {
            jqBarStatus2 = false;

            var owl1 = $(".section-progress__slider");
            owl1.owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots: false,
                smartSpeed: 2000,
                autoplayTimeout: 4000,
            });

            $(".owl-next").click(function () {
                owl1.trigger("next.owl.carousel");

            });
            $(".owl-prev").click(function () {
                owl1.trigger("prev.owl.carousel");
            });

        }
    });

    //section-events__slider

    var jqBar3 = $('.section-events') // селектор для вашего блока
        jqBarStatus3 = true;

    $(window).scroll(function () {
        var scrollEvent3 = ($(window).scrollTop() > (jqBar3.position().top - $(window).height()));
        if (scrollEvent3 && jqBarStatus3) {
            jqBarStatus3 = false;
            console.log('работаю')

            var owl2 = $(".section-events__slider");
            owl2.owlCarousel({
                items: 2.2,
                loop: true,
                autoplay: true,
                dots: false,
                smartSpeed: 2000,
                autoplayTimeout: 3500
            });
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.button_top').fadeIn();
        } else {
            $('.button_top').fadeOut();
        }
    });
    $('.button_top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
})