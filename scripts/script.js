const luckBtn = document.querySelector(".luck-btn");
const changeLogo = document.querySelector(".logo-img");
luckBtn.addEventListener("click", function (event) {
  event.preventDefault();
  changeLogo.src = "./images/oddity-logo.jpg";
});
