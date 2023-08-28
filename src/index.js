const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
    const isVisible = navList.getAttribute("data-visible");
    if (isVisible == "true") {
        navList.setAttribute("data-visible", "false");
        overlay.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        // To re-enable scrolling after menu is removed
        document.body.setAttribute("data-mobile-menu-visible", "false");
    } else {
        navList.setAttribute("data-visible", "true");
        overlay.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        // To disable scrolling after menu is visible
        document.body.setAttribute("data-mobile-menu-visible", "true")
    }
});

overlay.addEventListener("click", () => {
    navList.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    // To re-enable scrolling after menu is removed
    document.body.setAttribute("data-mobile-menu-visible", "false");
});
