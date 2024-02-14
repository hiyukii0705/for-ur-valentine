const title = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".yesbtn");
const noButton = document.querySelector(".nobtn");
const img = document.querySelector(".img");


yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click",handleNoClick);

function handleNoClick() {
  noButton.classList.add("hidden");
}

function handleYesClick() {
  title.innerHTML = "I love u too :3 （＾ｖ＾)";
  buttonsContainer.classList.add("hidden");
  changeImage (img.src = "1");
}


function changeImage(image) {
  img.src = `img/${image}.gif`;
}