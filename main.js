
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) 
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos =Math .floor(tempoFinal/1000);
  let minutos  =Math .floor(segundos/60);
  let horas =Math .floor(horas/24);
  let dias= Math .floor(horas/24);
  let segundos = tempoFinal / 1000;
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
  }
  