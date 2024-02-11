let button = document.querySelector("#darkmode-button");
button.addEventListener("click", function () {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    document.querySelector("body").classList.add("dark");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 30000,
    },
  });
});

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".collec-content", options);

let filterItems = document.querySelectorAll(".filters li");
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .tab-active").classList.remove("tab-active");
    document.querySelector(".collec-cat").classList.remove("active");
    filterItem.classList.add("tab-active");
    filterItem.classList.add("active");
    console.log("oui");
  });
});
