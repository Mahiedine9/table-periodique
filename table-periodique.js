/* fonctions pour l'exercice sur la table périodique */

function setupListeners(){
  var input1 = document.getElementById('checkMasse');
  if ((document.getElementById("checkMasse").checked) == false) {
      for (let i = 0; i < masse.length; i++) {
          masse[i].style.display = "none";
      }

  }
  else {
      for (let i = 0; i < masse.length; i++) {
          masse[i].style.display = "block";
      }
  }

}
let masse = document.querySelector("#lignes").querySelectorAll("div.ligne div.masseatomique");
let input2 = document.getElementById('checkMasse');
input2.addEventListener('change',setupListeners);
