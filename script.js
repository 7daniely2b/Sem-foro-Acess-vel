const btnPir = document.getElementById('btn-pir');
const chkMotor = document.getElementById('usar-motor');
const led1 = document.getElementById('led1');
const led2 = document.getElementById('led2');
const motor = document.getElementById('motor');
const serialLog = document.getElementById('serial-log');

let processando = false;

function logSerial(mensagem) {
  serialLog.innerHTML += mensagem + '<br>';
  serialLog.scrollTop = serialLog.scrollHeight;
}

// Simulação da função tone() do Arduino
function tocarBuzzer(frequencia, duracaoMs) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequencia, audioCtx.currentTime);
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    audioCtx.close();
  }, duracaoMs);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function dispararSistema() {
  if (processando) return;
  processando = true;
  btnPir.disabled = true;

  logSerial('<br>>>> PRESENCA/MOVIMENTO DETECTADO! <<<');

  // 1. Sinalização sonora (Buzzer 1000Hz por 300ms)
  tocarBuzzer(1000, 300);

  // 2. Sinalização visual com PWM alternado
  for (let brilho = 0; brilho <= 255; brilho += 15) {
    const opacidade1 = brilho / 255;
    const opacidade2 = (255 - brilho) / 255;

    led1.style.backgroundColor = `rgba(255, 200, 0, ${opacidade1})`;
    led2.style.backgroundColor = `rgba(255, 200, 0, ${opacidade2})`;

    await delay(30);
  }

  // Mantém ambos acesos totalmente
  led1.style.backgroundColor = 'rgba(255, 200, 0, 1)';
  led2.style.backgroundColor = 'rgba(255, 200, 0, 1)';
  await delay(500);

  // 3. Motor Opcional
  if (chkMotor.checked) {
    logSerial('Motor acionado.');
    motor.classList.add('ativo');
    await delay(2000);
    motor.classList.remove('ativo');
    logSerial('Motor desligado.');
  }

  // 4. Desliga LEDs e finaliza
  led1.style.backgroundColor = '#333';
  led2.style.backgroundColor = '#333';

  logSerial('Sistema pronto para nova deteccao.');
  logSerial('---------------------------------');

  await delay(1000);
  btnPir.disabled = false;
  processando = false;
}

btnPir.addEventListener('click', dispararSistema);
