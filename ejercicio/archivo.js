function actualizar() {
  var izquierda = document.getElementById("izquierda").innerHTML;
  var derecha = document.getElementById("derecha").innerHTML;
  var izquierdaBajo = document.getElementById("izquierda-bajo").innerHTML;
  var derechaBajo = document.getElementById("derecha-bajo").innerHTML;

  document.getElementById("izquierda").innerHTML = derecha;
  document.getElementById("derecha").innerHTML = izquierdaBajo;
  document.getElementById("izquierda-bajo").innerHTML = derechaBajo;
  document.getElementById("derecha-bajo").innerHTML = izquierda;
}
