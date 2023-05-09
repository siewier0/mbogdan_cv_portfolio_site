// Dynamiczne dodawanie klasy active na nav item
const SECTIONS = document.querySelectorAll("section");
const NAV_LINKS_D_A = document.querySelectorAll(".nav-desktop ul a");
const NAV_LINKS_D_ICO_BG = document.querySelectorAll(".nav-desktop ul a .ico-bg");
const NAV_LINKS_D_SVG = document.querySelectorAll(".nav-desktop ul a .nav-img-desktop");
const NAV_LINKS_M = document.querySelectorAll("#menu-mobile ul a");

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
        };
    })};


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
};

THUMBNAILS.forEach((thumbnail, index) => {
    const showGallery = (e) => {
        GALLERY_PREVIEW.classList.remove("hidden");
        IMG_OPENED.src = e.target.src;
    };

    thumbnail.addEventListener("click", showGallery);
});

X_CLOSE.addEventListener("click", hideGallery);

GALLERY_PREVIEW.addEventListener("click", (e) => {
    if (e.target === GALLERY_PREVIEW || e.target === CURRENT_IMG_AREA) {
        hideGallery();
    }
});