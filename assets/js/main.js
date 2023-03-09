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
    window.onscroll = function () {
    };
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
                slidesPerView: 1,
                // spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
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


/*=============== INTRO SWIPER | Omonjon ===============*/
if ($(".introSwiper").length) {
    const slide = document.querySelectorAll(".introSwiper .swiper-slide");
    for (const i of slide) {
        const random = (number) => Math.floor(Math.random() * (number + 155));
        const rndCol = `rgba(${random(255)},${random(255)},${random(255)},1)`;
        i.style.backgroundColor = rndCol;
    }
    const swiperOptions = {
        loop: "infinite",
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        // custom pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (i, className) {
                return `
   <button class="${className}">
  <svg class="swiper-progress" width="31" height="31"><circle class="circle-origin" r="15" cx="15.5" cy="15.5"></circle></svg><span class="d-flex align-content-center justify-content-center"><img class="d-flex align-content-center justify-content-center" src="../../assets/images/icons/dot.svg"></span>
</button>
      `;
            }
        }
    };
/*
${
                    i + 1
                } */
    const swiper2 = new Swiper(".introSwiper", swiperOptions);







    /*var swiper = new Swiper(".introSwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });*/
}



/*=============== HEADER FIXED | Omonjon ===============*/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

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
    g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };