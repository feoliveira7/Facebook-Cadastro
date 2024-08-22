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