console.log("Script carregado");

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formAgendamento");

    if (!formulario) return;

    formulario.addEventListener("submit", async function (event) {

        event.preventDefault();

        const consulta = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            especialidade: document.getElementById("especialidade").value,
            data: document.getElementById("data").value,
            horario: document.getElementById("horario").value,
            observacao: document.getElementById("observacao").value
        };

        const { error } = await window.supabaseClient
            .from("consultas")
            .insert([consulta]);

        if (error) {
            console.error(error);
            alert("Erro ao salvar o agendamento.");
            return;
        }

        alert("Consulta agendada com sucesso!");

        formulario.reset();

    });

});