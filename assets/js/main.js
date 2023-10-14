$(document).ready(function () {

    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each((_, element) => {
        var minPerSlide = 3;
        var next = $(element).next();
        if (!next.length) {
            next = $(element).siblings(':first');
        }
        next.children(':first-child')
            .clone()
            .appendTo($(element));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(element).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(element));
        }
    });

    var win = $(this);
    if (win.width() < 500) {
        $('.slider-item').each((_, element) => {
            console.log('here')
            $(element).removeClass('col-3')
                .removeClass('col-6')
                .addClass('col');
        });
    } else if (win.width() < 1000)
    {
        $('.slider-item').each((_, element) => {
            console.log('here')
            $(element).removeClass('col-3')
                .removeClass('col')
                .addClass('col-6');
        });
    }

    $(window).on('resize', () => {
        var win = $(this);
        if (win.width() >= 1000) {
            $('.slider-item').each((_, element) => {
                $(element).removeClass('col')
                    .removeClass('col-6')
                    .addClass('col-3');
            });
        } else if (win.width() >= 500) {
            $('.slider-item').each((_, element) => {
                console.log('here')
                $(element).removeClass('col-3')
                    .removeClass('col')
                    .addClass('col-6');
            });
        } else {
            $('.slider-item').each((_, element) => {
                $(element).removeClass('col-3')
                    .removeClass('col-6')
                    .addClass('col');
            });
        }
    });


    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#section-nav', offset: 100 });


    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        if ($(window).width() < 992) {
            $('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });
        }
        else {
            $('body').scrollTo(target, 800, { offset: -64, 'axis': 'y' });
        }


    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize', function () {

        $('#section-nav-wrapper').removeClass('fixed');

        var scrollTop = $(this).scrollTop();

        // Check fixednav contains any element before get the offset - https://stackoverflow.com/questions/20175094/uncaught-typeerror-cannot-read-property-top-of-undefined

        var fixednav = $('#section-nav-wrapper');

        if (fixednav.length) {
            var topDistance = $('#section-nav-wrapper').offset().top;
        }

        if ((topDistance) > scrollTop) {
            $('#section-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-section-nav');
        }
        else {
            $('#section-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-section-nav');
        }

    });


    /* ======= Modules accordion ======= */
    // $('.module-toggle').on('click', function () {
    //     console.log('toggling');
    //     if ($(this).find('svg').attr('data-icon') == 'plus') {
    //         $(this).find('svg').attr('data-icon', 'minus');
    //     } else {
    //         $(this).find('svg').attr('data-icon', 'plus');
    //     };
    // });


    $('.collapse').on('shown.bs.collapse', () => {
        setModuleIcon();
    });

    $('.collapse').on('hidden.bs.collapse', () => {
        setModuleIcon();
    });


    /* ======= Play/Stop Video in Bootstrpa Modal  ======= */
    /* ======= Note: Chrome 66+ doesn't allow vimeo video auto play (https://github.com/vimeo/player.js/issues/199) ====== */

    $('.video-play-trigger').on('click', function () {

        var theModal = $(this).data("target");
        var theVideo = $(theModal + ' iframe').attr('src');
        var theVideoAuto = theVideo + "?autoplay=1";

        $(theModal).on('shown.bs.modal', function () {
            $(theModal + ' iframe').attr('src', theVideoAuto);
        });

        $(theModal).on('hide.bs.modal', function () {
            $(theModal + ' iframe').attr('src', '');
        });

        $(theModal).on('hidden.bs.modal', function () {
            $(theModal + ' iframe').attr('src', theVideo);
        });

    });

});

function setModuleIcon() {
    $('.collapse').each((index, element) => {
        $(element).parent().find('.module-toggle-icon').each((_, e) => {
            if ($(element).hasClass('show') && $(e).hasClass('fa-plus')) {
                $(e).removeClass('fa-plus').addClass('fa-minus');
            }
            else if ($(e).hasClass('fa-minus')) {
                $(e).removeClass('fa-minus').addClass('fa-plus');
            }
        });
    });
}
