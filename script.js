var getData = function () {
    var name = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var numero = document.getElementById("number").value;
    mensaje = "";

    if (name.trim() === "") {
        mensaje += " Nombre,"
    }

    if (apellido.trim() === "") {
        mensaje += "  Apellido,"
    }
    
    if (direccion.trim() === "") {
        mensaje += "  Direccion,"
    }

    if (numero.trim() === "") {
        mensaje += "  Numero,"
    }

    if (mensaje.trim() === "") {
        mensaje = "Nombre " + name + ", Apellido " + apellido + ", Direccion " + direccion + ", Numero " + numero;
    }
    
    else {
        mensaje = "Ingrese: " + mensaje
        mensaje = mensaje.slice(0, -1)
    }

    alert(mensaje)
}

let getResultado = function () {
    let pregunta1 = document.getElementsByName('pregunta1');
    let arr = [];
    for (var i = 0, length = pregunta1.length; i < length; i++) {
        if (pregunta1[i].checked) {
            arr.push(pregunta1[i].value);
            break;
        }
    }
    let pregunta2 = document.getElementsByName('pregunta2');

    for (var i = 0, length = pregunta2.length; i < length; i++) {
        if (pregunta2[i].checked) {
            arr.push(pregunta2[i].value);
            break;
        }
    }
    let pregunta3 = document.getElementsByName('pregunta3');

    for (var i = 0, length = pregunta3.length; i < length; i++) {
        if (pregunta3[i].checked) {

            arr.push(pregunta3[i].value);
            break;
        }
    }

    let pregunta4 = document.getElementsByName('pregunta4');

    for (var i = 0, length = pregunta4.length; i < length; i++) {
        if (pregunta4[i].checked) {

            arr.push(pregunta4[i].value);
            break;
        }
    }
    let respuestas = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "true") {
            respuestas += 1;
        }
    }
    alert("Respuestas correctas: " + respuestas + "/4")
}

let isNumeric = function () {

    let cad = document.getElementById('cad');

    if (isNaN(cad.value)) {
        alert(cad.value + " no es numero")

    }
    else {
        num=cad.value.toString();

        alert(cad.value + " si es numero con    "+ num.length+" digitos")
    }

}
