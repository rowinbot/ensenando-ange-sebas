function cargar() {
  var input = document.getElementById("texto-a-introducir").value;
  var izquierda = document.getElementById("izquierda").innerHTML;
  var derecha = document.getElementById("derecha").innerHTML;
  var izquierdaBajo = document.getElementById("izquierda-bajo").innerHTML;
  var derechaBajo = document.getElementById("derecha-bajo").innerHTML;

  if (izquierda != "") document.getElementById("izquierda").innerHTML = input;
  if (derecha != "") document.getElementById("derecha").innerHTML = input;
  if (izquierdaBajo != "")
    document.getElementById("izquierda-bajo").innerHTML = input;
  if (derechaBajo != "")
    document.getElementById("derecha-bajo").innerHTML = input;
  else document.getElementById("izquierda").innerHTML = input;
}
