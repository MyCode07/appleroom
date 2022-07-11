document.addEventListener('DOMContentLoaded', function (e) {

    const homeSlider = document.querySelector('.home__slider-swiper');
    if (homeSlider) {
        new Swiper(`.home__slider-swiper`, {
            loop: true,
            spaceBetween: 120,
            slidesPerView: 'auto',
            pagination: {
                el: '.home__slider-pagination',
                clickable: true,
            },
            navigation: false,
        })
    }

    const sliders = document.querySelectorAll('._main-slider__swiper');
    if (sliders) {
        sliders.forEach(slider => {
            let clas = slider.closest('section').classList[0];
            new Swiper(`.${clas} ._main-slider__swiper`, {
                loop: true,
                spaceBetween: 20,
                slidesPerView: 'auto',
                pagination: false,
                navigation: {
                    prevEl: `.${clas} ._main-slider__prev`,
                    nextEl: `.${clas} ._main-slider__next`
                },
                breakpoints: {
                    660: {
                        slidesPerView: 1,
                    },
                }
            })
        })
    }

    const blogSlider = document.querySelector('.blog__slider-swiper');
    if (blogSlider) {
        new Swiper(`.blog__slider-swiper`, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 'auto',
            pagination: false,
            navigation: {
                prevEl: `.blog__slider-prev`,
                nextEl: `.blog__slider-next`
            }
        })
    }

    document.addEventListener('click', function (e) {
        let targetEl = e.target;
        if (targetEl.classList.contains('header__burger')) {
            document.querySelector('.mobile__menu').classList.add('_open');
            document.querySelector('body').classList.add('_noscroll');
        }

        if (targetEl.classList.contains('mobile__menu-close')) {
            document.querySelector('.mobile__menu').classList.remove('_open');
            document.querySelector('body').classList.remove('_noscroll');
        }

        if (targetEl.classList.contains('mobile__menu-overlay')) {
            document.querySelector('.mobile__menu').classList.remove('_open');
            document.querySelector('body').classList.remove('_noscroll');
        }
    })


    let copyright = document.querySelector('.footer__copyright');
    if (copyright && window.innerWidth <= 640) {
        document.querySelector('.footer__payment').after(copyright);
    }
})