function enviarFormulario()  {
    //pegar valores

    var contaDados = new Object();
    contaDados.Nome = document.getElementById('nameInput').value;
    contaDados.Sobrenome = document.getElementById('surnameInput').value;
    contaDados.Email = document.getElementById('emailInput').value;
    contaDados.Telefone = document.getElementById('telefoneInput').value;
    contaDados.Cpf = document.getElementById('cpfInput').value;
    contaDados.Dia = document.getElementById('diaInput').value;
    contaDados.Mes = document.getElementById('mesInput').value;
    contaDados.Ano = document.getElementById('anoInput').value;
    contaDados.Senha = document.getElementById('senhaInput').value;
    contaDados.SenhaConfirmada = document.getElementById('reSenhaInput').value;


//Converter para string

    var meuJson = JSON.stringify(contaDados)

    console.log(meuJson)
    console.log(contaDados.valueOf())

    // document.getElementById('valorNome').innerHTML

}