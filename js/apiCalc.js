function doGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function showHipotenusa() {
    const btn = document.querySelector("#calc");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const cateto1 = document.querySelector("#cateto1").value;
        const cateto2 = document.querySelector("#cateto2").value;

        const hipotenusa = document.querySelector("#hipotenusa");
        hipotenusa.value = Number(
            doGet(`URL_API/calculadora/${cateto1}&${cateto2}`)
        );
    });
}

showHipotenusa();
