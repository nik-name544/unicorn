$(function () {
    $('.header__item-btn').on('click', function () {
        $('.header__item').toggleClass("off");
    });

    $('.articles__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
        autoplaySpeed: 2000,
    });

    $('.clients__inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
    });
});