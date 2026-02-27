document.getElementById("btnConvertir").addEventListener("click", function () {

    let numero = document.getElementById("numero").value.trim();
    let sistema = document.getElementById("sistema").value;
    let error = document.getElementById("error");

    error.textContent = "";

    if (numero === "") {
        error.textContent = "Debe ingresar un número.";
        return;
    }

    let decimal = parseInt(numero, sistema);

    if (isNaN(decimal)) {
        error.textContent = "Número inválido para el sistema seleccionado.";
        return;
    }

    document.getElementById("decimal").textContent = decimal;
    document.getElementById("binario").textContent = decimal.toString(2);
    document.getElementById("octal").textContent = decimal.toString(8);
    document.getElementById("hexadecimal").textContent = decimal.toString(16).toUpperCase();
});