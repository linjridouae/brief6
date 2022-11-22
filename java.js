function valide() {
  var name = document.getElementById("nom").value;
  var regEx = /^[a-zA-Z]$/;
  if (name.length == "" || name.length > 30) {
    document.getElementById("nom").style.border = "4px solid red";
    document.getElementById("prenom").style.border = "4px solid red";
    document.getElementById("name").innerHTML = "S' il vous plait ecrit votre nom correcte";
    document.getElementById("name").style.color = "red";
  }
  if (name.length <= 30 && regEx.test(name)) {
    document.getElementById("nom").style.border = "4px solid green";
    document.getElementById("name").innerHTML = "Votre nom est valide";
    document.getElementById("name").style.color = "green";
  }
}
function validation() {
  var pré = document.getElementById("prenom").value;
  var regEx = /^[a-zA-Z]+$/;
  if (pré.length == "" || pré.length > 30) {
    document.getElementById("prenom").style.border = "4px solid red";
    document.getElementById("pré").innerHTML = "S' il vous plait ecrit votre prénom correcte";
    document.getElementById("pré").style.color = "red";

  }
  if (pré.length <= 30 && regEx.test(pré)) {
    document.getElementById("prenom").style.border = "4px solid green";
    document.getElementById("pré").innerHTML = "Votre prénom est valide";
    document.getElementById("pré").style.color = "green";
  }
}
function validate() {
  var email = document.getElementById("email").value;
  var validRegex =/^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
  if (validRegex.test(email)) {
    document.getElementById("email").style.border = "4px solid green";
    document.getElementById("email1").innerHTML = "Votre email est valide";
    document.getElementById("email1").style.color = "green";
  } else {
    document.getElementById("email").style.border = "4px solid red";
    document.getElementById("email1").innerHTML = "S' il vous plait ecrit votre email correcte";
    document.getElementById("email1").style.color = "red";

  }
}
function Jevalide() {
  var telephone = document.getElementById("tele").value;
  var regExTele = /^[0]{1}[5-7]{1}[0-9]{8}$/;
  if (regExTele.test(telephone)) {
    document.getElementById("tele").style.border = "4px solid green";
    document.getElementById("telephone1").innerHTML = "Votre telephone est valide";
    document.getElementById("telephone1").style.color = "green";
  } else {
    document.getElementById("tele").style.border = "4px solid red";
    document.getElementById("telephone1").innerHTML = "S' il vous plait ecrit votre  numéro de telephone correcte";
    document.getElementById("telephone1").style.color = "red";


  }
}

function inscription() {
  let name = document.getElementById("nom").value;
  let pré = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let telephone = document.getElementById("tele").value;
  var regExTele = /^[0]{1}[5-7]{1}[0-9]{8}$/;
  var validRegex =/^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
  var regEx = /^[a-zA-Z]+$/;
  let checkboxes = document.querySelectorAll('input[name="a"]:checked');
  let checkboxes1 = document.querySelectorAll('input[name="b"]:checked');
  var table = [];
  var table2 = [];
  let selected = [];
  for (var option of document.getElementById("cars").options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  checkboxes.forEach((checkbox) => {
    table.push(checkbox.value);
  });
  checkboxes1.forEach((checkbox) => {
    table2.push(checkbox.value);
  });

  if (name.length > 30 || name == "") {
    document.getElementById("name").innerHTML = " S'il vous plait saisez votre nom correct";
  }
  if (pré.length > 30 || pré == "") {
    document.getElementById("pré").innerHTML = "Votre prenom est incorrect";
  }
  if (email == "") {
    document.getElementById("email1").innerHTML = "Votre email est incorrect";
  }
  if (document.getElementById("tele").value == "") {
    document.getElementById("telephone1").innerHTML ="Votre telephone est incorrect";
  }
  if (table == "")
    document.getElementById("para").innerHTML ="S'il vous plait choisez votre Genre!!";
  if (table2 == "") {
    document.getElementById("para2").innerHTML ="S'il vous plait choisez votre Groupe!!";
  }
  if (selected == "") {
    document.getElementById("para3").innerHTML = "S'il vous plait choisez votre Choix!!";
  }
  if((name.length <= 30 && regEx.test(name)) && (pré.length <= 30 && regEx.test(pré)) && validRegex.test(email) && regExTele.test(telephone) && table!==0 && table2!==0 && selected.length<=3 && selected!==0){
      document.getElementById('final').innerHTML="Votre inscription a achevé";
  }

}