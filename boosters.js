let button = document.querySelector("#darkmode-button");
button.addEventListener("click", function () {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    document.querySelector("body").classList.add("dark");
  }
});
