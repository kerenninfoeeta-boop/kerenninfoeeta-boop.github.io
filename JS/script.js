console.log("Script carregado");

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página carregada");

    const formulario = document.getElementById("formAgendamento");

    console.log(formulario);

    if (!formulario) {
        console.log("Formulário não encontrado");
        return;
    }

    formulario.addEventListener("submit", async function (event) {

        event.preventDefault();

        alert("O clique chegou aqui!");

    });

});