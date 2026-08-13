function mudarSinal(cor) {
    document.getElementById("somPare").pause();
document.getElementById("somAtencao").pause();
document.getElementById("somSiga").pause();

document.getElementById("somPare").currentTime = 0;
document.getElementById("somAtencao").currentTime = 0;
document.getElementById("somSiga").currentTime = 0;

if (cor === "vermelho") {
    document.getElementById("somPare").play();
}

if (cor === "amarelo") {
    document.getElementById("somAtencao").play();
}

if (cor === "verde") {
    document.getElementById("somSiga").play();
}

    let luzes = document.querySelectorAll(".luz");

    luzes.forEach(function(luz){
        luz.classList.remove("aceso");
    });

    document.getElementById(cor).classList.add("aceso");

    let mensagem = document.getElementById("mensagem");

    if(cor === "vermelho"){
        mensagem.innerHTML = "❌ Pare! Não atravesse agora.";
    }

    else if(cor === "amarelo"){
        mensagem.innerHTML = "🟡 Atenção! Aguarde o próximo sinal.";
    }

    else{
        mensagem.innerHTML = "✅ Siga! Pode continuar.";
    }
}
