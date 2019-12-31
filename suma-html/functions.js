function aumentar() {
  var valorActual = document.getElementById("resultado").innerHTML;

  document.getElementById("resultado").innerHTML = parseInt(valorActual) + 1;
}

function resetear() {
  document.getElementById("resultado").innerHTML = 0;
}

function disminuir() {
  var valorActual = document.getElementById("resultado").innerHTML;

  document.getElementById("resultado").innerHTML = parseInt(valorActual) - 1;
}
