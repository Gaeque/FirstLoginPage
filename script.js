function acao() {
  let registro = document.getElementById("card2");
  if (registro.style.display === "block") {
    registro.style.display = "none";
  }
  registro.style.display = "block";
  let login = document.getElementById("card");
  login.style.display = "none";
}

var botao2 = document.getElementById("botao2");
botao2.addEventListener("click", function () {
  let login = document.getElementById("card");
  login.style.display = "block";

  let registro = document.getElementById("card2");
  if (registro.style.display === "block") {
    registro.style.display = "none";
  }
});

new SimpleAnime();
