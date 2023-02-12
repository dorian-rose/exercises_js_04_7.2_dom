function muestra() {
  var enlaceSeguirLeyendo = document.getElementById("enlace1");
  enlaceSeguirLeyendo.style = "display: none";
  //enlaceSeguirLeyendo.classList.add("oculto");
  var span = document.getElementById("adicional");
  span.className = "visible";
  var enlace2 = document.getElementById("enlace2");
  enlace2.className = "visible";

  //elementosOcultos.style = "display: inline";
}

function oculta() {
  var enlaceSeguirLeyendo = document.getElementById("enlace1");
  enlaceSeguirLeyendo.style = "display: inline";
  //enlaceSeguirLeyendo.classList.add("oculto");
  var span = document.getElementById("adicional");
  span.className = "oculto";
  var enlace2 = document.getElementById("enlace2");
  enlace2.className = "oculto";
}
