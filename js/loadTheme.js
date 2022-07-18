// Alterando o tema

const themeSwitch = document.querySelector("#themeDarkOrLight");

function toogleTheme() {
    const body = document.body;
    body.classList.toggle("theme-dark");

    localStorage.removeItem("theme-dark");

    if (body.classList.contains("theme-dark")) {
        localStorage.setItem("theme-dark", 1);
    }
}

function loadTheme() {
    const themeDark = localStorage.getItem("theme-dark");
    if (themeDark) {
        toogleTheme();
    }
}

loadTheme();

themeSwitch.addEventListener("change", toogleTheme);
