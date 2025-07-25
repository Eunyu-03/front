const sidebar_mainbtns = document.querySelectorAll(".menu-btn");

sidebar_mainbtns.forEach((sidebar_mainbtn) => {
    sidebar_mainbtn.addEventListener("click", (e) => {
        e.preventDefault();

        const subMenuId = sidebar_mainbtn.getAttribute("aria-controls");
        const subMenu = document.getElementById(subMenuId);

        const icon = sidebar_mainbtn.querySelector(".icon-wrapper i");

        if (subMenu.classList.contains("show")) {
            subMenu.classList.remove("show");
            sidebar_mainbtn.setAttribute("aria-expanded", "false");
            sidebar_mainbtn.classList.add("collapsed");

            icon.classList.remove("mdi-chevron-down");
            icon.classList.add("mdi-chevron-right");
        } else {
            subMenu.classList.add("show");
            sidebar_mainbtn.setAttribute("aria-expanded", "true");
            sidebar_mainbtn.classList.remove("collapsed");

            icon.classList.remove("mdi-chevron-right");
            icon.classList.add("mdi-chevron-down");
        }
    });
});
