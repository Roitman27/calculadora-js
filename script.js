let display = document.getElementById("display");

let valorAtual = "";
let valorAnterior = "";
let operador = null;

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

  let resultado;

  const num1 = Number(valorAnterior);
  const num2 = Number(valorAtual);

  if (operador === "+") resultado = num1 + num2;
  if (operador === "-") resultado = num1 - num2;
  if (operador === "*") resultado = num1 * num2;
  if (operador === "/") resultado = num1 / num2;

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

}