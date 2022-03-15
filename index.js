document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector(".menu-toggle")
    const topMenu = document.querySelector(".top-menu")

    menuToggle.onclick = function () {
        menuToggle.classList.toggle("menu-toggle_active");
        topMenu.classList.toggle("top-menu_active");
    }

    document.addEventListener('click', e => {
            const withinBoundaries = e.composedPath().includes(menuToggle);
            if (!withinBoundaries) {
                menuToggle.classList.remove("menu-toggle_active");
                topMenu.classList.remove("top-menu_active");
            }
        }
    )

});