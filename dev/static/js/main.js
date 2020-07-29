$(function () {
    const langDropdown = () => {
        const lang = $('.language')
        const flag = $('.language__current-flag')
        let dropdown = $('.language__dropdown')
        lang.on('click', function () {
            const $this = $(this);
            dropdown =  $this.children('.language__dropdown')
            dropdown.slideToggle(200)
            $this.toggleClass('language--open')
            if(lang.hasClass('language--open')){
                const item = $('.language__dropdown-item')
                item.on('click', function (event) {
                    event.preventDefault()
                    const src = $(this).find('img').attr('src')
                    flag.attr('src', src)
                })
            }
        })
        $(document).on('click', function(event){
            if(lang !== event.target && !lang.has(event.target).length){
                lang.removeClass("language--open");
                dropdown.slideUp(200)
            }
        });

    }
    langDropdown()
    $('.js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        rows: 0,
        arrows: false,
        dots: true,
        dotsClass: 'slider__dots',
        autoplay: true,
        cssEase: 'linear',
        touchThreshold: 30,
        adaptiveHeight: true
    });
    $('.slider__icon').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 1000);
    })
    const menu = () => {
        const open = $('.js-open')
        const close = $('.js-close')
        const menu = $('.menu')
        open.on('click', function () {
            $(this).addClass('is-active')
            menu.addClass('menu--open')
            close.addClass('is-active')
        })
        close.on('click', function () {
            $(this).removeClass('is-active')
            menu.removeClass('menu--open')
            open.removeClass('is-active')
        })
    }
    menu()
})
