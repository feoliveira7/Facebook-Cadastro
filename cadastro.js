const inputSenha = document.getElementById('senhaInput');
const inputResenha = document.getElementById('reSenhaInput');
const botaoCadastro = document.getElementById('botaoEnviarCadastro');

function verificarIgualdade() {
    if (inputSenha.value === inputResenha.value && inputSenha.value !== "") {
        // Se os valores forem iguais, adiciona a classe 'igual' e remove a 'diferente'
        inputResenha.classList.add('verificado');
        inputResenha.classList.remove('falso');
        botaoCadastro.disabled = false;
        botaoCadastro.style.opacity = '100%';
        botaoCadastro.style.cursor = "Pointer";


    } else if (inputSenha.value !== "" && inputResenha.value !== "") {
        // Se os valores forem diferentes, adiciona a classe 'diferente' e remove a 'igual'
        inputResenha.classList.add('falso');
        inputResenha.classList.remove('verificado');
        botaoCadastro.disabled = true;
        botaoCadastro.style.opacity = '40%';
        botaoCadastro.style.cursor = "Default";


    } else {
        // Remove ambas as classes se os inputs estiverem vazios
        inputResenha.classList.remove('verificado', 'falso');
        botaoCadastro.disabled = true;
        botaoCadastro.style.opacity = '40%';
        botaoCadastro.style.cursor = "Default";
    }
}

inputSenha.addEventListener('input', verificarIgualdade);
inputResenha.addEventListener('input', verificarIgualdade);

document.getElementById('telefoneInput').addEventListener('input', function (e) {
    let input = e.target.value;

    // Remove todos os caracteres não numéricos
    input = input.replace(/\D/g, '');

    // Adiciona a formatação do telefone (XX) XXXXX-XXXX
    input = input.replace(/^(\d{2})(\d)/g, "($1) $2");
    input = input.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = input;
});

document.getElementById('cpfInput').addEventListener('input', function (e) {
    let input = e.target.value;

    // Remove todos os caracteres não numéricos
    input = input.replace(/\D/g, '');

    // Adiciona a formatação do CPF: XXX.XXX.XXX-XX
    input = input.replace(/(\d{3})(\d)/, "$1.$2");
    input = input.replace(/(\d{3})(\d)/, "$1.$2");
    input = input.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = input;
});

function alternarSenha(){
    const inputSenha = document.getElementById('senhaInput');
    const imageAlternar = document.getElementById('imgPasswordView');

    if(inputSenha.type === "password"){
        inputSenha.type = "text";
        imageAlternar.src = "images/ClosedEyes.png";
    }else{
        inputSenha.type = "password";
        imageAlternar.src = "images/OpenEyes.png";
    }
}

function alternarReSenha(){
    const inputreSenha = document.getElementById('reSenhaInput');
    const AlterarImage = document.getElementById('imgPasswordView2');

    if(inputreSenha.type === "password"){
        inputreSenha.type = "text";
        AlterarImage.src = "images/ClosedEyes.png";
    }else{
        inputreSenha.type = "password";
        AlterarImage.src = "images/OpenEyes.png";
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const selectDia = document.getElementById('diaInput');
    const selectMes = document.getElementById('mesInput');
    const selectAno = document.getElementById('anoInput');

    // Gerar opções para dias (1-31)
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i < 10 ? `0${i}` : i; // Adicionar zero à esquerda para números menores que 10
        option.textContent = i;
        selectDia.appendChild(option);
    }

    // Gerar opções para meses (1-12)
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    meses.forEach((mes, index) => {
        const option = document.createElement('option');
        option.value = (index + 1).toString().padStart(2, '0'); // Adicionar zero à esquerda
        option.textContent = mes;
        selectMes.appendChild(option);
    });

    // Gerar opções para anos (1950 até o ano atual)
    const anoAtual = new Date().getFullYear();
    for (let i = anoAtual; i >= 1950; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectAno.appendChild(option);
    }
});


