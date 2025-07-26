function startGame() {
  const pseudo = document.getElementById("pseudo").value;
  if (!pseudo) {
    alert("Merci de saisir un pseudo !");
    return;
  }
  document.querySelector(".intro").style.display = "none";
  document.getElementById("pseudo").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("gameArea").innerHTML = `<p>Bienvenue ${pseudo}, le jeu commencera bientôt...</p>`;
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("lockedOut", "true");
  });
}
window.onload = function () {
  if (localStorage.getItem("lockedOut") === "true") {
    document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:4rem;'>Tu as quitté l’arène.<br/>Tu pourras rejoindre la prochaine partie uniquement.</h2>";
  }
}
