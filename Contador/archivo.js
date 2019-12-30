function suma(num1, num2) {
  return num1 + num2;
}

function actualizar() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  document.getElementById("resultado").innerHTML = suma(
    parseFloat(num1),
    parseFloat(num2)
  );
}

actualizar();
