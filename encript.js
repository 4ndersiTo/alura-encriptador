const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector(".resultado");
const btnCopiar = document.querySelector(".btnCopiar");
const validar = document.querySelector(".validar");
const toggleButton = document.getElementById("toggleButton");

btnEncriptar.addEventListener("click", encriptarTexto);
btnDecencriptar.addEventListener("click", decencriptarTexto);
resultado.addEventListener("click", copiarTexto);
toggleButton.addEventListener("click", toggleSVG);

function encriptarTexto() {
  let texto = document.querySelector("#texto").value;
  if (removerAcentos(texto)) {
    return;
  }
  let textoEncriptado = texto.replace(/e/gim, "enter");
  textoEncriptado = textoEncriptado.replace(/i/gm, "imes");
  textoEncriptado = textoEncriptado.replace(/a/gm, "ai");
  textoEncriptado = textoEncriptado.replace(/o/gm, "ober");
  textoEncriptado = textoEncriptado.replace(/u/gm, "ufat");
  mostrarHTML(textoEncriptado);
  document.querySelector("#texto").value = "";
}

function removerAcentos(texto) {
  if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
    const alerta = document.createElement("div");
    alerta.textContent = "Ingrese un texto sin acentos";
    alerta.classList.add("error");
    setTimeout(() => {
      alerta.remove();
    }, 1500);
    validar.appendChild(alerta);
    return true;
  }
  if (texto !== texto.toLowerCase()) {
    const alerta = document.createElement("div");
    alerta.textContent = "Ingrese un texto sin mayusculas";
    alerta.classList.add("error");
    setTimeout(() => {
      alerta.remove();
    }, 1500);
    validar.appendChild(alerta);
    return true;
  }
  return false;
  /* return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); */
}

function mostrarHTML(textoEncriptado) {
  resultado.innerHTML = `
    <div class="sk-circle">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>
    `;
  setTimeout(() => {
    resultado.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btnCopiar">Copiar</button>
        `;
  }, 1000);
}
function copiarTexto() {
  const textoEncriptado = document.querySelector(".resultado textarea");
  textoEncriptado.select();
  document.execCommand("copy");
}

function decencriptarTexto() {
  let texto = document.querySelector("#texto").value;
  texto = texto.toLowerCase();
  let textoEncriptado = texto.replace(/enter/gm, "e");
  textoEncriptado = textoEncriptado.replace(/imes/gm, "i");
  textoEncriptado = textoEncriptado.replace(/ai/gm, "a");
  textoEncriptado = textoEncriptado.replace(/ober/gm, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/gm, "u");
  mostrarHTML(textoEncriptado);
  document.querySelector("#texto").value = "";
}

///////////////////////////////////// CAMBIO DE TEMA

document.getElementById("svg2").style.display = "none";
// Función para cambiar entre SVGs
function toggleSVG() {
  var svg1 = document.getElementById("svg1");
  var svg2 = document.getElementById("svg2");
  var p = document.getElementById("parrafo");
  var textArea = document.getElementById("texto");

  var body = document.body;
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");

  // Alternar la visibilidad de los SVGs
  if (svg1.style.display !== "none") {
    svg1.style.display = "none";
    document.body.style.backgroundColor = "#333";
    svg2.style.display = "block";
    p.style.color = "white";
    textArea.style.color = "white";
  } else {
    document.body.style.backgroundColor = "#d4ddef";
    svg1.style.display = "block";
    svg2.style.display = "none";
    p.style.color = "#5b6e93";
    textArea.style.color = "black";
  }
}
