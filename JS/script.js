
console.log("Script carregado");

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formAgendamento");

    if (!formulario) return;

    formulario.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const especialidade = document.getElementById("especialidade").value;
        const data = document.getElementById("data").value;
        const horario = document.getElementById("horario").value;
        const observacao = document.getElementById("observacao").value.trim();

        if (
            !nome ||
            !email ||
            !telefone ||
            !especialidade ||
            !data ||
            !horario
        ) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        const { error } = await supabaseClient
    .from("consultas")
            .insert([
                {
                    nome,
                    email,
                    telefone,
                    especialidade,
                    data,
                    horario,
                    observacao,
                    status: "Agendada"
                }
            ]);

        if (error) {
            console.error(error);
            alert("Erro ao salvar a consulta.");
            return;
        }

        alert("Consulta agendada com sucesso!");

        formulario.reset();

    });

});
