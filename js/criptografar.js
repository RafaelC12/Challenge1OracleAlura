var botaoCriptografar = document.querySelector(".cripto");
var botaoDescriptografar = document.querySelector(".descripto");
var botaoCopiar = document.querySelector(".copiar");
var mensagemSaida = document.querySelector(".saida");

//criptografar mensagem//
botaoCriptografar.addEventListener("click", function(evento) {

  var mensagem = document.querySelector('.mensagem').value;
  var mensagemCodificada = criptografarMsg(mensagem);
});

//descriptografar mensagem//
botaoDescriptografar.addEventListener("click", function(evento) {

  var mensagem = document.querySelector('.mensagem').value;
  var mensagemDescodificada = descriptografarMsg(mensagem);
});

function criptografarMsg(mensagem) {

  var mensagemArray = mensagem.split('');

  for (var i = 0; i < mensagemArray.length; i++) {

    if(mensagemArray[i] == mensagemArray[i].toUpperCase() && mensagemArray[i] !== " ") {

      alert("Apenas letras minúsculas!");
      break;

    } else{

      var textoCodificado = mensagem.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat").replace(/[^a-z ]/gi,'');
      mensagemSaida.value = textoCodificado;
    }
  }
}

function descriptografarMsg(mensagem) {

  var mensagemArray = mensagem.split('');

  for (var i = 0; i < mensagemArray.length; i++) {

    if(mensagemArray[i] == mensagemArray[i].toUpperCase() && mensagemArray[i] !== " ") {

      alert("Apenas letras minúsculas, sem números ou caracteres especiais!");
      break;
    } else{

      var textoDescodificado = mensagem.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u").replace(/[^a-z ]/gi,'');
      mensagemSaida.value = textoDescodificado;
    }
  }
}

botaoCopiar.addEventListener("click", () => {
  mensagemSaida.select();
  document.execCommand("copy");
});
