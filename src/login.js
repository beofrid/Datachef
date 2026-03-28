//============================================
//  código Robson Lopes dos Santos
//============================================

const forms = document.querySelectorAll(".container");
const formCadastro = forms[0];
const formLogin = forms[1];

function formA () {
    const inputs = formCadastro.querySelectorAll("input");

    const nome = inputs[0].value;
    const email = inputs[1].value;
    const senha = inputs[2].value;
    const repetirSenha = inputs[3].value;

    if (!nome || !email || !senha || !repetirSenha) {
        alert("Você deve preencher todos os campos!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 dígitos!");
        return;
    }

    if (senha !== repetirSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
};


function formB () {
    const inputs = formLogin.querySelectorAll("input");

    const email = inputs[0].value;
    const senha = inputs[1].value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!validarEmail(email)) {
        alert("Email inválido!");
        return;
    }

    alert("Login válido (simulação)");
};

