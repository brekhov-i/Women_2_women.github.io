$(document).ready(function() {
    $('.link-mouse').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 800);
        return false;
    });
    $('.slick-slider').slick({
        prevArrow: $('.carousel-control-prev'),
        nextArrow: $('.carousel-control-next'),
        centerMode: true,
        centerPadding: '80px',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.navbar-toggler').find('input').click(function () {
        if($('body').css('overflow') === 'hidden')
        {
            $('body').css({'overflow':'visible'});
        }
        else
        {
            $('body').css({ 'overflow': 'hidden' });
        }
        $('.navbar-collapse').slideToggle(600, 'linear', function() {
            if($(this).css('display') === 'block')
            {
                $(this).css({'display':'flex'})
            }
        })
    })
    .mouseenter(function () {
        $('.navbar-toggler').find('span').css({ 'background': '#aa8d37' })
    })
    .mouseleave(function () {
        $('.navbar-toggler').find('span').css({ 'background': '#ffffff' })
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


    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        threshold: 1000,
        effect: 'fadeIn',
        visibleOnly: false,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        },
        youtubeLoader: function (element) {
            var url = 'https://www.youtube.com/embed/LpjpF51Q9B4',
                frame = $('<iframe />')

            frame.attr('src', url)
            frame.attr('width', '100%')
            frame.attr('height', 450)
            frame.attr('frameborder', 0)
            frame.attr('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture")
            frame.attr('allowfullscreen', 'allowfullscreen');
            element.append(frame).load();
        },
    });
    
})