$(function() {

	$('.carousel-star_wars').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
        dots: true,
        smartSpeed: 700
    });

    $('#nav-icon').click(function(){
        var nav = $('nav ul');
            button = $('#nav-icon');
            duration = 300;

        if(!button.hasClass('open')) {
            $(button).addClass('open');
            nav.stop(true, true).slideDown(duration)
        } else {
            $(button).removeClass('open');
            nav.stop(true, true).slideUp(duration)
        }
    });

    $('.search-icon').on('click', function () {
        var $this       = $(this),
            input       = $('.header .header__top-side .top-side__left'),
            search_icon = $('.search-icon .fa-search'),
            close_icon  = $('.search-icon .fa-times'),
            duration    = 300;

        if(!$this.hasClass('active')) {
            $this.addClass('active');
            input.slideDown(duration);
            $('.header .nav').animate({
                'margin-top' : '52px'
            });
            search_icon.css('display', 'none');
            close_icon.css('display', 'block')
        } else {
            $this.removeClass('active');
            input.slideUp(duration);
            $('.header .nav').animate({
                'margin-top' : '17px'
            });
            close_icon.css('display', 'none');
            search_icon.css('display', 'block')
        }
    });

    if(parseInt($(document).width()) < 768){
        $('.list-title').on('click', function (e) {
            e.preventDefault();
            var $this           = $(this),
                footer_column   = $this.closest('.footer-column'),
                items           = footer_column.find('.accordion-item'),
                icon_wrap       = footer_column.find('.drop-down_icon'),
                icon            = footer_column.find('.drop-down_icon .fa'),
                duration        = 300;

            if(!items.hasClass('active')) {
                items.addClass('active');
                icon_wrap.css({'transform' : 'rotate(180deg)',});
                icon.css({'color' : '#0049b0',});
                items.stop(true, true).slideDown(duration)
            } else {
                items.removeClass('active');
                icon_wrap.css('transform', 'rotate(0)');
                icon.css({'color' : '#202020',});
                items.stop(true, true).slideUp(duration)
            }
        })
    }

    var nav         = $('.header .nav'),
        mainContent = $('.main-content'),
        topNav      = nav.offset().top;

    function fixNav(e) {
        if(window.scrollY >= topNav) {
            mainContent.css('padding-top', '60px');
            nav.addClass('sticky')
        } else {
            nav.removeClass('sticky');
            mainContent.css('padding-top', '0');
        }
    }

    window.addEventListener('scroll', fixNav)
});
