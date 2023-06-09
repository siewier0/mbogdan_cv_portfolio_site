// Dynamiczne dodawanie klasy active na nav item
const SECTIONS = document.querySelectorAll("section");

const NAV_LINKS_D_ICO_BG = document.querySelectorAll(".nav-desktop ul a .ico-bg");
const NAV_LINKS_D_SVG = document.querySelectorAll(".nav-desktop ul a .nav-img-desktop");

const NAV_LINKS_M_LI = document.querySelectorAll("#menu-mobile ul li");
const NAV_LINKS_M_SVG = document.querySelectorAll("#menu-mobile ul svg");
const NAV_LINKS_M_H3 = document.querySelectorAll("#menu-mobile ul h3");

window.onscroll = () => {
    SECTIONS.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 125;
        let height = section.offsetHeight;
        let sectionNumber = index + 1;

        if (top >= offset && top < offset + height) {        
            NAV_LINKS_D_ICO_BG.forEach(link => {
                link.classList.remove("nav-active");
            });

            NAV_LINKS_D_SVG.forEach(link => {
                link.classList.remove("nav-active");
            });     

            document.querySelector('.nav-desktop ul a[value = "' + sectionNumber + '"] .ico-bg').
            classList.add("nav-active");

            document.querySelector('.nav-desktop ul a[value = "' + sectionNumber + '"] svg').classList.add("nav-active");

            NAV_LINKS_M_LI.forEach(link => {
                link.classList.remove("mobile-active");
            });
            NAV_LINKS_M_SVG.forEach(link => {
                link.classList.remove("mobile-active");
            });
            NAV_LINKS_M_H3.forEach(link => {
                link.classList.remove("mobile-active");
            });

            document.querySelector('.nav-mobile--content ul a[value = "' + sectionNumber + '"] svg').classList.add("mobile-active");

            document.querySelector('.nav-mobile--content ul a[value = "' + sectionNumber + '"] h3').classList.add("mobile-active");

            document.querySelector('.nav-mobile--content ul a[value = "' + sectionNumber + '"]').parentElement.classList.add("mobile-active");
        };
    })};
    

// Zmiana scroolhinta w zależności od urządzenia
const SCROOL_HINT = document.querySelector(".arrows");

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) ||
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

if ( is_touch_enabled() ) {
    SCROOL_HINT.setAttribute("style", "transform: rotate(180deg)")
};


// Obsługa zwijania/rozwijania menu hamburgera + Blokada wieloklika
const MENU_TOGGLER = document.querySelector("#menu-toggler");
const MENU_MOBILE = document.querySelector("#menu-mobile");
const HAMBURGER = document.querySelector("#hamburger");

function toggle() {
    if (MENU_MOBILE.classList.contains("menu-mobile-active")) {
        MENU_MOBILE.classList.add("slideOut")

        setTimeout(function(){
            MENU_MOBILE.classList.remove("menu-mobile-active")
        }, 580);

        setTimeout(function(){
            MENU_MOBILE.classList.remove("slideOut")
        }, 580);

        HAMBURGER.setAttribute("disabled", "true");
        setTimeout(function(){
            HAMBURGER.removeAttribute("disabled");
        }, 580)
 
    } else {
    MENU_MOBILE.classList.toggle("menu-mobile-active");
    HAMBURGER.setAttribute("disabled", "true");
    setTimeout(function(){
        HAMBURGER.removeAttribute("disabled");
    }, 580)
    }
};

HAMBURGER.addEventListener("click", toggle);


// Znikanie menu po wybraniu - mobile
const NAV_ITEM = document.querySelectorAll("#menu-mobile ul li");

NAV_ITEM.forEach((item) => {
    item.addEventListener("click", () => {
        toggle();
        HAMBURGER.classList.toggle("opened");
        HAMBURGER.setAttribute("aria-expanded", "false");
})});


// Zamykanie menu po kliknięciu na tło - mobile
const MENU_AREA = document.querySelector(".nav-mobile");

document.onclick = function(e) {
    if (!MENU_AREA.contains(e.target) && MENU_MOBILE.classList.contains("menu-mobile-active")) {
        toggle();
        HAMBURGER.classList.remove("opened");
        HAMBURGER.setAttribute("aria-expanded", "false");
    };
};

// Obsługa galerii
const THUMBNAILS = document.querySelectorAll(".portfolio-one-img");
const GALLERY_PREVIEW = document.querySelector(".portfolio-pop-up-bg");
const X_CLOSE = document.querySelector("#x-close");
const IMG_OPENED = document.querySelector("#img-opened");
const CURRENT_IMG_AREA = document.querySelector(".current-img");

const hideGallery = () => {
    GALLERY_PREVIEW.classList.add("fade-out")
    setTimeout( () => {
        GALLERY_PREVIEW.classList.add("hidden");
    }, 199);

    setTimeout( () => {
        GALLERY_PREVIEW.classList.remove("fade-out");
    }, 200);

    document.querySelector("body").setAttribute("style", "overflow-y: none")
};

THUMBNAILS.forEach((thumbnail, index) => {
    const showGallery = (e) => {
        GALLERY_PREVIEW.classList.remove("hidden");
        let imgNumber = e.target.src;
        imgNumber = imgNumber.substring(imgNumber.length - 6);
        let source = "assets/portfolio/portfolio_" + imgNumber;
        IMG_OPENED.src = source;
        document.querySelector(".loader-spinner").setAttribute("style", "opacity: 1")
        IMG_OPENED.setAttribute("style", "opacity: 0")
        document.querySelector("body").setAttribute("style", "overflow-y: hidden")

        IMG_OPENED.onload = function() {
            document.querySelector(".loader-spinner").setAttribute("style", "opacity: 0")
            IMG_OPENED.setAttribute("style", "opacity: 1")
        }
    };

    thumbnail.addEventListener("click", showGallery);
});

X_CLOSE.addEventListener("click", hideGallery);

GALLERY_PREVIEW.addEventListener("click", (e) => {
    if (e.target === GALLERY_PREVIEW || e.target === CURRENT_IMG_AREA) {
        hideGallery();
    }
});


// Animations
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-active");
      } else {
        reveals[i].classList.remove("reveal-active");
      }
    }
  }

window.addEventListener("scroll", reveal)


const JOB_NAME = document.querySelector("#job-name");
const HERO_SCOAILS = document.querySelector(".hero-socials");
const BUTTON_DOWNLOAD = document.querySelector(".download-btn")
const NAV_DESKTOP = document.querySelector(".nav-desktop")
const ARROWS_HINT = document.querySelector(".arrows")

setTimeout( () => {
    JOB_NAME.classList.add("opacity-1");
}, 1600);

setTimeout( () => {
    HERO_SCOAILS.classList.add("opacity-1");
}, 2400);

setTimeout( () => {
    BUTTON_DOWNLOAD.classList.add("opacity-1");
}, 2600);

setTimeout( () => {
    ARROWS_HINT.classList.add("opacity-1");
}, 3400);

setTimeout( () => {
    HAMBURGER.classList.add("opacity-1");
}, 3400);

setTimeout( () => {
    NAV_DESKTOP.classList.add("opacity-1");
}, 3600);