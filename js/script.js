// Calculando

const btn = document.querySelector("#calc");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const cateto1 = document.querySelector("#cateto1").value;
    const cateto2 = document.querySelector("#cateto2").value;
    calcPitagoras(cateto1, cateto2);
});

function calcPitagoras(cateto1, cateto2) {
    const hipotenusa = document.querySelector("#hipotenusa");

    if (typeof cateto1 != "number" || typeof cateto2 != "number") {
        hipotenusa.value = "Valor inválido!";
    }

    const valueHipotenusa = Math.sqrt(
        Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
    );

    hipotenusa.value = valueHipotenusa;
}

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
