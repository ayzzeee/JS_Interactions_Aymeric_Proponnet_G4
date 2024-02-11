let button = document.querySelector("#darkmode-button");
button.addEventListener("click", function () {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    document.querySelector("body").classList.add("dark");
  }
});

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // annule le comportement pas défaut (envoi du form)

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value === "") {
    // si email vide
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    email.classList.remove("success");
    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Le champ EMail ne peut pas être vide";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#username");
  if (pseudo.value.length < 6) {
    // si pseudo < 6
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    pseudo.classList.remove("success");
    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Le pseudo ne peut contenir moins de 6 caractères";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

  let password = document.querySelector("#password");
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    // si mdp < 10 ou pas assez fort
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    password.classList.remove("success");
    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Le mdp n'est pas conforme (doit contenir 1 maj, 1 min, 1 chiffre, 1 carac spé, et doit être > 10 caractères";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    password.classList.add("success");
  }

  let passwordConfirm = document.querySelector("#passwordConfirm");
  if (passwordConfirm.value !== password.value || passwordConfirm.value === "") {
    // si pas le meme mdp
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    passwordConfirm.classList.remove("success");
    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Le mdp doit etre le meme que l'autre";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    passwordConfirm.classList.add("success");
  }

  let choix1 = document.querySelector("#apprenti");
  let choix2 = document.querySelector("#intermediaire");
  let choix3 = document.querySelector("#confirme");
  let choix4 = document.querySelector("#expert");
  if (!(choix1.checked || choix2.checked || choix3.checked || choix4.checked)) {
    // si un des 4 est coché
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    choix1.classList.remove("success");
    choix2.classList.remove("success");
    choix3.classList.remove("success");
    choix4.classList.remove("success");
    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Il faut choisir un niveau parmi ceux proposés";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    choix1.classList.add("success");
    choix2.classList.add("success");
    choix3.classList.add("success");
    choix4.classList.add("success");
  }

  let maison = document.querySelector("#select-maison");
  if (maison.value === "") {
    // si un des 4 est coché
    errorContainer.classList.add("visible"); // affiche conteneur des erreurs
    maison.classList.remove("success");

    let err = document.createElement("li"); // créer un <li></li> dans le HTML
    err.innerText = "Il faut choisir une maison";
    errorList.appendChild(err); // ajouter le li dans la liste des erreurs
  } else {
    maison.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (email.classList.contains("success") && pseudo.classList.contains("success") && password.classList.contains("success") && passwordConfirm.classList.contains("success")) {
    successContainer.classList.add("visible");
  }
});
