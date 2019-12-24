async function cargarPais(nombre) {
  var respuesta = await fetch(
    "https://restcountries.eu/rest/v2/name/" + nombre
  );
  var pais = await respuesta.json();

  document.getElementById("pais").innerHTML = pais[0].name;
}

cargarPais("venezuela");
