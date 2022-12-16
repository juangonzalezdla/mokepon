const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionBotonReiniciar = document.getElementById('boton-reiniciar');
const botonMascota = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');

let ataqueJugador = [];
let ataqueEnemigo = [];

let inputHipodoge;
let inputCapipepo;
let inputRatigueya;

let botonFuego;
let botonAgua;
let botonTierra;

let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let opcionDeMokepones;

let indexAtaqueJugador;
let indexAtaqueEnemigo;

let botones = [];
const mokepones = [];

class Mokepon {
  constructor(nombre, imagen, vidas) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.vidas = vidas;
    this.ataques = [];
  }
}

const hipodoge = new Mokepon('Hipodoge', './assets/mokepon_hipodoge_attack.png', 5);
const capipepo = new Mokepon('Capipepo', './assets/mokepon_capipepo_attack.png', 5);
const ratigueya = new Mokepon('Ratigueya', './assets/mokepon_ratigueya_attack.png', 5);

hipodoge.ataques.push(
  { nombre: 'Agua💧', id: 'boton-agua' },
  { nombre: 'Agua💧', id: 'boton-agua' },
  { nombre: 'Agua💧', id: 'boton-agua' },
  { nombre: 'Fuego🔥', id: 'boton-fuego' },
  { nombre: 'Tierra🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
  { nombre: 'Tierra🌱', id: 'boton-tierra' },
  { nombre: 'Tierra🌱', id: 'boton-tierra' },
  { nombre: 'Tierra🌱', id: 'boton-tierra' },
  { nombre: 'Agua💧', id: 'boton-agua' },
  { nombre: 'Fuego🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
  { nombre: 'Fuego🔥', id: 'boton-fuego' },
  { nombre: 'Fuego🔥', id: 'boton-fuego' },
  { nombre: 'Fuego🔥', id: 'boton-fuego' },
  { nombre: 'Agua💧', id: 'boton-agua' },
  { nombre: 'Tierra🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
      <input class="cards__pet__selection" type="radio" name="mascota" id=${mokepon.nombre} />
      <label class="cards__pet" for=${mokepon.nombre}>
        <p class="cards__pet__name">${mokepon.nombre}</p>
        <img class="cards__pet__image" src=${mokepon.imagen} alt=${mokepon.nombre}
      </label>   
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
  })

  sectionSeleccionarAtaque.style.display = 'none';
  sectionBotonReiniciar.style.display = 'none';

  botonMascota.addEventListener('click', seleccionarMascotaJugador);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = 'none';
  sectionSeleccionarAtaque.style.display = 'flex';

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert('Selecciona una mascota');
  }

  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
      <button class="attacks__btn BAtaque" id=${ataque.id}>${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon;
  })

  botonFuego = document.getElementById('boton-fuego');
  botonAgua = document.getElementById('boton-agua');
  botonTierra = document.getElementById('boton-tierra');
  botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === 'Fuego🔥') {
        ataqueJugador.push('FUEGO');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
        boton.disabled = true;
      } else if (e.target.textContent === 'Agua💧') {
        ataqueJugador.push('AGUA');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
        boton.disabled = true;
      } else {
        ataqueJugador.push('TIERRA');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
        boton.disabled = true;
      }

      ataqueAleatorioEnemigo();
    })
  })
}
 
function seleccionarMascotaEnemigo() {
  const mascotaAleatoria = aleatorio(0, mokepones.length -1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;

  secuenciaAtaque();
}

function ataqueAleatorioEnemigo() {
  const ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push('FUEGO');
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push('AGUA');
  } else {
    ataqueEnemigo.push('TIERRA');
  }

  console.log(ataqueEnemigo);
  iniciarCombate();
}

function iniciarCombate() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATE");
    } else if (ataqueJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(i, i);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("Esto fue un empate!!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else {
    crearMensajeFinal("LO SIENTO, perdiste :(");
  }
}

function crearMensaje(resultado) {
  const nuevoAtaqueDelJugador = document.createElement('p');
  const nuevoAtaqueDelEnemigo = document.createElement('p');

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  sectionBotonReiniciar.style.display = 'flex';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);