const form = document.getElementById('formulario')
const nameInput = document.getElementById('inome')
const dataInput = document.getElementById('inasce')
const telInput = document.getElementById('itel')
const emailInput = document.getElementById('iemail1')
const senhaInput = document.getElementById('isenha1')


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha com o seu nome.");
        return
    }

    if(dataInput.value === "") {
        alert("Por favor, preencha com a sua data de nascimento.");
        return
    }

    if(telInput.value === "") {
        alert("Por favor, preencha com o numero do seu telefone celular");
        return
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha com o seu email.");
        return
    }

    if(!validatePassword(senhaInput.value)) {
        alert("A senha precisa ter no mínimo 8 dígitos!")
        return
    }

    // Se todos os campos estiverem corretos, envie o form.
    form.submit()
})

// Validar Email
function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );
    if(emailRegex.text(email)) {
        return true
    } else {
        return false
    }

// Validar Senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        return true
    } else {
        return false
    }
}

}