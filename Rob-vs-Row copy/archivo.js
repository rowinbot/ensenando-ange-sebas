var turno = 0;

var rowin = { tiempo: 100, trabajo: 15 };
var robin = { tiempo: 100, trabajo: 12 };

function ciclo() {
  if (rowin.tiempo > 0 && robin.tiempo > 0) {
    if (turno == 0) {
      robin.tiempo = robin.tiempo - rowin.trabajo;

      turno = 1;
      imprimirDatos();
    } else {
      rowin.tiempo = rowin.tiempo - robin.trabajo;

      turno = 0;
      imprimirDatos();
    }
  } else {
    if (rowin.tiempo <= 0) {
      alert("Robin gano");
    } else {
      alert("Rowin gano");
    }
  }
}

function reset() {
  turno = 0;

  rowin = { tiempo: 100, trabajo: 15 };
  robin = { tiempo: 100, trabajo: 12 };
  imprimirDatos();
}

function imprimirDatos() {
  document.getElementById("turno").innerHTML =
    "Turno para " + (turno == 0 ? "Rowin" : "Robin");

  document.getElementById("timBIM").innerHTML = "Tiempo: " + robin.tiempo;
  document.getElementById("trabajoBIM").innerHTML = "Trabajo: " + robin.trabajo;

  document.getElementById("timWIM").innerHTML = "Tiempo: " + rowin.tiempo;
  document.getElementById("trabajoWIM").innerHTML = "Trabajo: " + rowin.trabajo;
}

imprimirDatos();
