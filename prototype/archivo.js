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
