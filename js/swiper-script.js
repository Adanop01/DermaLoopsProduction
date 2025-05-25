$(function () {
    var swiperImage = new Swiper('.swiper.swiperImage', {
        autoplay: {
            delay: 5000
        },
        speed: 2000,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
            }
        },
        // If we need pagination
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});

$(function () {
    var swiperTestimonials = new Swiper('.swiperTestimonials', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 1,
            }
        },
        // If we need pagination
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});

$(function () {
    var swiperTestimonials2 = new Swiper('.swiperTestimonials2', {
        autoplay: {
            delay: 5000
        },
        speed: 2000,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2,
            }
        },
        scrollbar: {
            el: '.custom-scrollbar',
            draggable: true,
        }
    });

});

$(function () {
    var swiperPartner = new Swiper('.swiper.swiperPartner', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        initialSlide: 1,
        loop: false,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});

$(function () {
    var swiperCard = new Swiper(".swiperCard", {
        speed: 1000,
        effect: "cards",
        grabCursor: true,
        initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

const swiper = new Swiper('.custom-swiper', {
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
        el: '.custom-scrollbar',
        draggable: true,
    },
});

const mySwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    slidesPerView: 4, // Jumlah slide yang ditampilkan
    spaceBetween: 20, // Jarak antar slide
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
        }
    },
    scrollbar: {
        el: '.custom-scrollbar',
        draggable: true,
    }
});

$(function () {
    var swiperCard = new Swiper(".swiperService", {
        speed: 1000,
        effect: "fade",
        grabCursor: true,
        initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

$(function () {
    var swiperCard = new Swiper(".swiperService2", {
        speed: 1000,
        effect: "fade",
        grabCursor: true,
        initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});