const inputNomeUsuario = document.getElementById("nome");
const buttonSalvar = document.getElementById("button");
const mensagem = document.getElementById("mensagem");

buttonSalvar.addEventListener("click", evento => {
    evento.preventDefault();

    if(inputNomeUsuario.value === ""){
        window.alert("Ops, você se esqueceu de preencher o campo nome!!")
    }

    mensagem.textContent = `Olá, ${inputNomeUsuario.value}, seja bem-vindo! 👑`

})


