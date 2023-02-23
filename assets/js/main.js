/*=============== Loader | Omonjon ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");
});

// For Dark Light mode | Omonjon //
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".mode__theme");
let svgNone = document.querySelectorAll(".svg-none");
let saveToggle = document.querySelector(".darkmode input[type='checkbox']");

const enableDarkMode = () => {
    document.documentElement.classList.add("blind");
    darkModeToggle.classList.add("active");
    saveToggle.setAttribute("checked", "true");

    for (let i = 0; i < svgNone.length; i++) {
        const element = svgNone[i];
        element.style.display = "none";
    }

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.documentElement.classList.remove("blind");
    darkModeToggle.classList.remove("active");
    saveToggle.setAttribute("checked", "false");
    for (let i = 0; i < svgNone.length; i++) {
        const element = svgNone[i];
        element.style.display = "block";
    }

    localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode();
        /*disableScroll();*/
    } else {
        disableDarkMode();
    }
});

/* ########################################################## */
// Partners | Swiper ********************************** */
if ($(".partnersSlider").length) {
    var swiper = new Swiper(".partnersSlider", {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 1000,
        },
        speed: 1000,
        slidesPerView: 5,
        grabCursor: true,
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
                // spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 10
            },
        },
        navigation: {
            nextEl: ".swiper-partners-btn-next",
            prevEl: ".swiper-partners-btn-prev",
        },
    });
}

/* ********************************************************** */


/*=============== SCROLL UP | Omonjon ===============*/
if ($("#scroll-up").length) {
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
}

var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };