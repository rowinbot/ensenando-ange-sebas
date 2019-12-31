var contador = 0;

function aumentar() {
  contador = contador + 1;

  impResultado();
}

function resetear() {
  contador = 0;

  impResultado();
}

function disminuir() {
  contador = contador - 1;

  impResultado();
}

function impResultado() {
  document.getElementById("resultado").innerHTML = contador;
  document.getElementById("decenas").innerHTML = Math.abs(
    Math.floor(contador / 10)
  );
}

resetear();
