var screenValue = 0;
var restValue = 0;

var lastResultValue = 0;
var hasComma = false;

var nextAction = "";
var isResult = false;

function clearScreen() {
  screenValue = 0;
  restValue = 0;

  lastResultValue = 0;

  nextAction = "";
  isResult = false;

  printValues();
}

function number(n) {
  if (screenValue == 0 || isResult) {
    screenValue = n;
  } else {
    if (hasComma) {
      screenValue = parseFloat(screenValue + "." + n, 9);
    } else {
      screenValue = parseFloat(screenValue + "" + n, 9);
    }
  }

  hasComma = false;
  isResult = false;
  printValues();
}

function absolute() {
  screenValue = screenValue * -1;
  printValues();
}

function percentage() {
  lastResultValue = screenValue;

  if (nextAction == "divide") {
    screenValue = restValue / ((restValue * screenValue) / 100);
  }
  if (nextAction == "multiply") {
    screenValue = (restValue * screenValue) / 100;
  }
  if (nextAction == "sum") {
    screenValue = restValue + (restValue * screenValue) / 100;
  }
  if (nextAction == "minus") {
    screenValue = restValue - (restValue * screenValue) / 100;
  }

  hasComma = false;
  restValue = 0;
  printValues();
}

function divide() {
  operation(restValue / screenValue, "divide");
}

function multiply() {
  operation(restValue * screenValue, "multiply");
}

function sum() {
  operation(restValue + screenValue, "sum");
}

function minus() {
  operation(restValue - screenValue, "minus");
}

function comma() {
  var hasDecimals = Math.abs(screenValue - Math.floor(screenValue)) > 0;

  if (!hasDecimals) {
    hasComma = true;
  }
}

function operation(newValue, name) {
  if (restValue != 0) {
    restValue = newValue;
    lastResultValue = restValue;
  } else {
    restValue = screenValue;
    lastResultValue = screenValue;
  }

  hasComma = false;
  screenValue = 0;
  nextAction = name;
  printValues();
}

function equal() {
  if (nextAction == "divide") {
    screenValue = restValue / screenValue;
  }
  if (nextAction == "multiply") {
    screenValue = restValue * screenValue;
  }
  if (nextAction == "sum") {
    screenValue = restValue + screenValue;
  }
  if (nextAction == "minus") {
    screenValue = restValue - screenValue;
  }

  hasComma = false;
  restValue = 0;
  isResult = true;
  printValues();
}

function printValues() {
  document.getElementById("last-result").innerHTML =
    lastResultValue != 0 ? formatValue(lastResultValue) : "...";

  document.getElementById("result").innerHTML = formatValue(screenValue);
}

function formatValue(value) {
  return value
    .toLocaleString("en-US", { maximumFractionDigits: 10 })
    .replace(/\./g, "rr")
    .replace(/,/g, ".")
    .replace(/rr/g, ",");
}

printValues();

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.nombreCompleto = function() {
  return this.nombre + " " + this.apellido;
};

var sebas = new Persona("Sebas", "Valencia");
sebas.name;
var rowin = new Persona("Rowin", "Hernandez");
rowin.name;

var personas = [sebas, rowin];
