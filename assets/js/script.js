(function ($) {
    "use strict"

    //* Scroll To Content
    function _scroll_to(selector, id) {
        $(selector).click(function () {
            $('html, body').animate({
                scrollTop: $(id).offset().top - 40
            }, 1500);

            $(".nav-bar a.home_link").removeClass("active")
            $(".nav-bar a.future_events_link").removeClass("active")
            $(".nav-bar a.code_of_conduct_link").removeClass("active")

            $(selector).addClass("active")
        });
    }
    _scroll_to(".nav-bar a.home_link", "#home")
    _scroll_to(".nav-bar a.future_events_link", "#future_events")
    _scroll_to(".nav-bar a.code_of_conduct_link", "#code_of_conduct")
    _scroll_to("button.get_started", "#event")

    //* The sliders
    function _slider(selector, items_0, items_900, items_1200) {
        $(selector).owlCarousel({
            nav: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            rtl: false,
            loop: true,
            margin: 30,
            items: 3,
            autoplay: false,
            smartSpeed: 700,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: items_0
                },
                900: {
                    items: items_900
                },
                1200: {
                    items: items_1200
                }
            }
        })
    }

    //* The reasons slider
    _slider('.reasons .owl-carousel', 3, 2, 2)
    //* The reasons slider
    _slider('.code-of-conduct .owl-carousel', 3, 2, 1)

})(jQuery);