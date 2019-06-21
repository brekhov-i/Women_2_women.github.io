$(document).ready(function() {
    (function ($) {
        // значение по умолчанию - ЗЕЛЁНЫЙ
        var defaults;

        // актуальные настройки, глобальные
        var options;

        defaults = {
            autoplay: true,
            arrows: false,
            nextArrow: '',
            prevArrow: '',
            autoplaySpeed: 2000,
            elementScroll: 1,
        };

        $.fn.carousel = function (params) {
            // при многократном вызове функции настройки будут сохранятся, и замещаться при необходимости
            options = $.extend({}, defaults, options, params);

            var elementsList = $(this).find('.slider-list')
                element = $(elementsList).find('.slide')

                elementsCount = element.length

                widthElement = parseInt($(element).css('width'))
                marginRight = parseInt($(element).css('margin-right'))
                console.log(widthElement, marginRight)
                widthScroll = options.elementScroll * (widthElement + marginRight)
                pixelsOffset = widthScroll
                currentLeftValue = 0
                minimumOffset = 0
                maximumOffset = -((elementsCount - 1) * pixelsOffset);

            var nextArrowclick;
            var nextPrevclick;

            console.log(options.autoplay)
                
            if ((options.arrows == true) && (options.autoplay == true)) {
                $(options.nextArrow).click(function () {
                    nextArrowclick == true;
                });
                $(options.nextPrev).click(function () {
                    nextPrevclick == true;
                });
                if ((nextArrowclick == true) || (nextPrevclick == true))
                {
                    console.log('if 2')
                    $(options.nextArrow).click(function () {

                        if (currentLeftValue != maximumOffset) {
                            currentLeftValue -= widthScroll;
                            elementsList.animate({ left: currentLeftValue + "px" }, 800);
                            console.log(currentLeftValue);
                            console.log('if 3')
                        }
                    });
                    $(options.prevArrow).click(function () {
                        if (currentLeftValue != minimumOffset) {
                            currentLeftValue += widthScroll;
                            elementsList.animate({ left: currentLeftValue + "px" }, 800);
                            console.log(currentLeftValue);
                            console.log('if 4')
                        }
                    });
                }
                else
                {
                    console.log('if 5')
                    setInterval(function () {

                        if (currentLeftValue != maximumOffset) {
                            currentLeftValue -= widthScroll;
                            elementsList.animate({ left: currentLeftValue + "px" }, 800);
                            console.log(currentLeftValue);
                            console.log('if 6')
                        }
                        else if (currentLeftValue == maximumOffset) {
                            currentLeftValue = 0;
                            elementsList.animate({ left: currentLeftValue + "px" }, 800);
                            console.log('if 7')
                        }

                    }, options.autoplaySpeed);
                }
            }
            else if(options.arrows = true){
                console.log('if 8')
                $(options.nextArrow).click(function () {

                    if (currentLeftValue != maximumOffset) {
                        currentLeftValue -= widthScroll;
                        elementsList.animate({ left: currentLeftValue + "px" }, 800);
                        console.log(currentLeftValue);
                        console.log('if 9')
                    }
                });
                $(options.prevArrow).click(function () {
                    if (currentLeftValue != minimumOffset) {
                        currentLeftValue += widthScroll;
                        elementsList.animate({ left: currentLeftValue + "px" }, 800);
                        console.log(currentLeftValue);
                        console.log('if 10')
                    }
                });
            }
            else if(options.autoplay == true)
            {
                console.log('if 11')
                setInterval(function () {

                    if (currentLeftValue != maximumOffset) 
                    {
                        currentLeftValue -= widthScroll;
                        elementsList.animate({ left: currentLeftValue + "px" }, 800);
                        console.log(currentLeftValue);
                        console.log('if 12')
                    }
                    else if (currentLeftValue == maximumOffset)
                    {
                        currentLeftValue = 0;
                        elementsList.animate({ left: currentLeftValue + "px" }, 800);
                        console.log('if 13')
                    }

                }, options.autoplaySpeed);
            }
            return this;
        };
    })(jQuery);

})  

