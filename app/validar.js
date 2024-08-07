function validarChute(chute){
const numero = +chute

if (Number.isNaN(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`
    return
}

if (numero < menorValor || numero > maiorValor) {
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto esta entre ${menorValor} e ${maiorValor}</div>`
    return
}

if (numero === numeroSecreto) {
    document.body.innerHTML =`
        <h3>Você Acertou !</h3>
        <h4>O número sortiado foi ${numeroSecreto}</h4>
        <button id="jogar-novamente" class="jogar-btn"> <i class="fa-regular fa-circle-play" style="color: #63E6BE;"></i> Jogar novamente</button>
    `
}else if (numero < numeroSecreto){
    elementoChute.innerHTML +=`<div>O número sorteado é maior <i class="fa-regular fa-circle-up"></i></div>`
}else{
    elementoChute.innerHTML +=`<div>O número sorteado é menor <i class="fa-regular fa-circle-down"></i></div>`
}

}