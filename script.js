function calcularPorcentaje() {

    const numero = document.getElementById("numero").value;
    const porcentaje = document.getElementById("porcentaje").value;

    const resultado = numero * porcentaje / 100;

    document.getElementById("resultado").textContent =
        porcentaje + "% de " + numero + " = " + resultado;

        function cambiarTipo(tipo) {

    const botones = document.querySelectorAll(".tipo");

    botones.forEach(function(boton) {
        boton.classList.remove("activo");
    });

    if (tipo === "porcentaje") {
        botones[0].classList.add("activo");
    }

    if (tipo === "aumentar") {
        botones[1].classList.add("activo");
    }

    if (tipo === "reducir") {
        botones[2].classList.add("activo");
    }

    if (tipo === "representa") {
        botones[3].classList.add("activo");
    }
}
}