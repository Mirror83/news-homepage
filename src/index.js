const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
const sectionElements = document.getElementsByName("section");

navToggle.addEventListener("click", () => {
    const isVisible = navList.getAttribute("data-visible");
    if (isVisible == "true") {
        navList.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");

        // navToggle.textContent = "Menu";
    } else {
        navList.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        // navToggle.textContent = "Close";
    }
})
