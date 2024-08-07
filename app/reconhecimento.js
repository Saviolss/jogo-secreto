const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.leng = 'pt-Br';
recognition.start();

recognition.addEventListener('result',onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript
  chuteNaTela(chute)
  validarChute(chute)
}

function chuteNaTela(chute) {
  elementoChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', e => {
if  (e.target.id="jogar-novamente"){
    window.location.reload()}  }
)