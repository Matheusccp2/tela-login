window.onload = function() {
    atualizarCodigoPostal();
};

function atualizarCodigoPostal() {
    var paisSelecionado = document.getElementById("pais").ariaValueMax;
    var telefoneInput = document.getElementById("telefone");
    var codigoPostal = "";

    switch (paisSelecionado) {
        case "brasil":
            codigoPostal = "+55";
            break;
        case "eua":
            codigoPostal = "+1";
            break;
    }
    telefoneInput.value = codigoPostal;
}

function verificaForcaSenha() {
    var senha = document.getElementById("senha").value;
    var forcaSenha = document.getElementById("forcaSenha");

    var forca = 0;

    if (senha.length >= 0) {
        forca++;
    }

    if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) {
        forca++;
    }

    if (/[0-9]/.test(senha)) {
        forca++;
    }

    if (/[^a-zA-Z0-9]/.test(senha)) {
        forca++;
    }

    switch (forca) {
        case 0:
        case 1:
            forcaSenha.textContent = "Ah, isso ta muito fácil";
            forcaSenha.className = "forca-senha-msg forca-senha-vermelho";
            break;
        case 2:
            forcaSenha.textContent = "Hmm, ta melhorando";
            forcaSenha.className = "forca-senha-msg forca-senha-amarelo";
            break;
        case 3:
        case 4:
            forcaSenha.textContent = "Perfeito";
            forcaSenha.className = "forca-senha-msg forca-senha-verde";
            break;
    }  
}

function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha");
    var togglePassword = document.getElementById("togglePassword");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        togglePassword.textContent = "Ocultar";
    } else {
        senhaInput.type = "password";
        togglePassword.textContent = "Mostrar";
    }
}

document.getElementById("senha").addEventListener("input", verificaForcaSenha);