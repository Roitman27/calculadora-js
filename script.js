const display = document.getElementById("display");
const listaHistorico = document.getElementById("listaHistorico");

let valorAtual = "";
let valorAnterior = "";
let operador = null;

let historico = [];

function adicionarNumero(numero) {

  valorAtual += numero;

  atualizarDisplay();

}

function operacao(op) {

  if (valorAtual === "") return;

  valorAnterior = valorAtual;
  valorAtual = "";
  operador = op;

}

function calcular() {

  if (valorAnterior === "" || valorAtual === "") return;

  const num1 = Number(valorAnterior);
  const num2 = Number(valorAtual);

  let resultado;

  if (operador === "+") resultado = num1 + num2;
  if (operador === "-") resultado = num1 - num2;
  if (operador === "*") resultado = num1 * num2;
  if (operador === "/") resultado = num1 / num2;

  const registro = `${num1} ${operador} ${num2} = ${resultado}`;

  historico.unshift(registro);

  atualizarHistorico();

  valorAtual = resultado.toString();
  operador = null;
  valorAnterior = "";

  atualizarDisplay();

}

function limpar() {

  valorAtual = "";
  valorAnterior = "";
  operador = null;

  atualizarDisplay();

}

function apagar() {

  valorAtual = valorAtual.slice(0, -1);

  atualizarDisplay();

}

function atualizarDisplay() {

  display.innerText = valorAtual || "0";

  ajustarFonte();

}

function atualizarHistorico() {
    
    listaHistorico.innerHTML = "";
    
    historico.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        listaHistorico.appendChild(li);
    });

}

function ajustarFonte() {

  const tamanho = valorAtual.length;

  if (tamanho > 12) {

    display.style.fontSize = "18px";

  } else if (tamanho > 8) {

    display.style.fontSize = "24px";

  } else {

    display.style.fontSize = "32px";

  }

}

// Suporte ao teclado

document.addEventListener("keydown", function(event) {
    
    const tecla = event.key;

    if (!isNaN(tecla) || tecla === ".") {
        adicionarNumero(tecla);
    }
   
    if (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
        operacao(tecla);
    }

    if (tecla === "Enter") {
        calcular();
    }

    if (tecla === "Backspace") {
        apagar();
    }

    if (tecla === "Escape") {
        limpar();
    }
});