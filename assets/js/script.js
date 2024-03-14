let textoCripto = document.querySelector("#texto__entrada");
let textoEncript = document.querySelector("#texto__cripto");

function criptografa() {
  let texto = textoCripto.value;

  //console.log(texto);

  textoEncript = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  //console.log(textoEncript);

  document.getElementById("texto__cripto").innerHTML =
    '<div><p class="texto_cripto" id="texto_cripto">' +
    textoEncript +
    "</p>" +
    '<button class="copia_btn" id="copiar" onclick="copia_texto()">Copiar</button> </div>';
}

function descriptografa() {
  let texto = textoEncript;

  let resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  //  document.getElementById('texto__cripto').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +
  //  '</textarea>'

  //document.getElementById("texto__cripto").innerHTML = ''
  //  '<p  id="input-texto">' + resultDescripto + "</p>";

  document.getElementById("texto__cripto").innerHTML =
    '<div class="texto_cripto_area"><p class="texto_cripto" id="texto_cripto">' +
    resultDescripto +
    "</p>" +
    '<button class="copia_btn" id="copiar" onclick="copia_texto()">Copiar</button> </div>';
}

function copia_texto() {
  let textoCopiado = document.getElementById("texto_cripto").innerHTML;
  navigator.clipboard.writeText(textoCopiado);

  //console.log('Texto copiado' + textoCopiado);
  //alert(`Texto copiado.: ${textoCopiado}`);
  alert(`Texto copiado !`);
}
