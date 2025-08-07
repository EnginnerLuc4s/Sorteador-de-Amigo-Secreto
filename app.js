let meusAmigos = [];

function adicionarAmigo() {
  var nomeDigitado = document.getElementById("amigo").value;

  if (nomeDigitado === "") {
    alert("Por favor, insira um nome.");
  } else {
    meusAmigos.push(nomeDigitado);
    atualizarListaAmigos(); 
    document.getElementById("amigo").value = "";
  }
}

function atualizarListaAmigos() {
  var lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (var i = 0; i < meusAmigos.length; i++) {
    var item = "<li>" + meusAmigos[i] + "</li>";
    lista.innerHTML += item;
  }
}

function sortearAmigo() {
  if (meusAmigos.length === 0) {
    alert("Nenhum amigo para sortear.");
    return;
  }

  var indiceAleatorio = Math.floor(Math.random() * meusAmigos.length);
  var amigoSorteado = meusAmigos[indiceAleatorio];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}


