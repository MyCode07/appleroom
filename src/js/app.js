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

        if (targetEl.classList.contains('header__catalog')) {
            document.querySelector('.categories').classList.add('_open');
        }

        if (targetEl.classList.contains('categories__close')) {
            document.querySelector('.categories').classList.remove('_open');
        }

        if (targetEl.classList.contains('catalog__open-sidebar')) {
            document.querySelector('.sidebar').classList.add('_open');
            document.querySelector('body').classList.add('_noscroll');

        }

        if (targetEl.classList.contains('sidebar__close')) {
            document.querySelector('.sidebar').classList.remove('_open');
            document.querySelector('body').classList.remove('_noscroll');
        }

    })


    let copyright = document.querySelector('.footer__copyright');
    if (copyright && window.innerWidth <= 640) {
        document.querySelector('.footer__payment').after(copyright);
    }

    let menus = document.querySelectorAll('.categories__menu');
    if (menus && window.innerWidth <= 992) {
        menus.forEach(menu => {
            let submenu = menu.querySelector('.categories__submenu');
            if (submenu) {
                let menuTitle = menu.querySelector('.categories__menu-link');
                menuTitle.insertAdjacentHTML('afterend', arrow);
            }
            menu.addEventListener('click', function (e) {
                if (e.target.classList.contains('open-submenu')) {
                    menu.querySelector('.categories__menu-link').classList.toggle('_active');
                    submenu.classList.toggle('_active');
                    e.target.classList.toggle('_active');
                }
            })
        })
    }

    let catalogMenus = document.querySelectorAll('.sidebar__menu');
    if (catalogMenus) {
        catalogMenus.forEach(menu => {
            let submenu = menu.querySelector('.sidebar__submenu');
            if (submenu) {
                let menuTitle = menu.querySelector('.sidebar__menu-link');
                menuTitle.insertAdjacentHTML('afterend', arrow);
            }

            menu.addEventListener('click', function (e) {
                if (e.target.classList.contains('open-submenu')) {
                    menu.querySelector('.sidebar__menu-link').classList.toggle('_active');
                    submenu.classList.toggle('_active');
                    e.target.classList.toggle('_active');
                }
            })
        })
    }
})

const arrow = `<svg class="open-submenu" width="18" height="10" viewBox="0 0 18 10" fill="none">
<path d="M0.193859 0.364268C0.441921 0.116206 0.845022 0.116206 1.09308 0.364268L9.00006 8.28675L16.9225 0.364269C17.1706 0.116207 17.5737 0.116207 17.8218 0.364269C18.0698 0.612331 18.0698 1.01543 17.8218 1.26349L9.46518 9.62008C9.34115 9.74412 9.18611 9.80613 9.01556 9.80613C8.86053 9.80613 8.68998 9.74412 8.56595 9.62008L0.209364 1.26349C-0.0542031 1.01543 -0.0542031 0.61233 0.193859 0.364268Z"/>
</svg>`;
