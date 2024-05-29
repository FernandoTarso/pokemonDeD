const botao = document.querySelector("header button");
let darkMode = localStorage.getItem("dark_mode_on");

if (darkMode) {
  darkModeToggle();
}

function darkModeToggle() {
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
    localStorage.setItem("dark_mode_on", "dmOn");
    darkMode = localStorage.getItem("dark_mode_on");
    console.log(darkMode);
  }
  if (icon === "./img/moon.png") {
    bImg.setAttribute("src", "./img/sun.png");
    darkMode = localStorage.setItem("dark_mode_on", "");
    console.log(darkMode);
  }
}

botao.addEventListener("click", darkModeToggle);
