let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'none';

  const sectionBotonReiniciar = document.getElementById('boton-reiniciar');
  sectionBotonReiniciar.style.display = 'none';

  const botonMascota = document.getElementById('boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascotaJugador);

  const botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);
  const botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click', ataqueAgua);
  const botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);

  const botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
  sectionSeleccionarMascota.style.display = 'none';

  const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'flex';

  const inputHipodoge = document.getElementById('hipodoge');
  const inputCapipepo = document.getElementById('capipepo');
  const inputRatigueya = document.getElementById('ratigueya');

  const spanMascotaJugador = document.getElementById('mascota-jugador');

  if(inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if(inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if(inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert('Selecciona una mascota');
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  const mascotaAleatoria = aleatorio(1, 3);
  const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

  if(mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if(mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  } 
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  const ataqueAleatorio = aleatorio(1, 3);
  if(ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if(ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  const spanVidasJugador = document.getElementById('vidas-jugador');
  const spanVidasEnemigo = document.getElementById('vidas-enemigo');

  if(ataqueJugador == ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if(vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if(vidasJugador == 0) {
    crearMensajeFinal("LO SIENTO, Perdiste :(");
  }
}

function crearMensaje(resultadoCombate) {
  const sectionMensajes = document.getElementById('mensajes');

  const parrafo = document.createElement('p');
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}. La mascota del enemigo atacó con ${ataqueEnemigo} - ${resultadoCombate}`;

  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resutadoFinal) {
  const sectionMensajes = document.getElementById('mensajes');

  const parrafo = document.createElement('p');
  parrafo.innerHTML = resutadoFinal;

  sectionMensajes.appendChild(parrafo);

  const botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  const botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  const botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;

  const sectionBotonReiniciar = document.getElementById('boton-reiniciar');
  sectionBotonReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);