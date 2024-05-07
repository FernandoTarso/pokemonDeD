const botao = document.querySelector("header button");

function cacarElementos() {
  document.querySelector(".bg-l").classList.toggle("bg-d");

  const cards = document.querySelectorAll(".bg-l-2");
  cards.forEach((card) => {
    card.classList.toggle("bg-d-2");
  });

  const texts = document.querySelectorAll(".clr-l");
  texts.forEach((text) => {
    text.classList.toggle("clr-d");
  });

  const bImg = document.querySelector("button img");
  let icon = bImg.getAttribute("src");
  if (icon === "./img/sun.png") {
    bImg.setAttribute("src", "./img/moon.png");
  }
  if (icon === "./img/moon.png") {
    bImg.setAttribute("src", "./img/sun.png");
  }
}

botao.addEventListener("click", cacarElementos);
