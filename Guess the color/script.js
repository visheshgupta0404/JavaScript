const color_code = document.getElementById("color_code");
const score_container = document.getElementById("score_container");
const option_container = document.getElementById("options_container");
const reset = document.getElementById("reset")
let score = 0;
let quesColor = null;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColorCode() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function scoreIncrement() {
    score += 5;
    window.localStorage.setItem("score", score);
    score_container.innerText = localStorage.getItem("score")
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    console.log(selectedColor);
    if (selectedColor === quesColor) {
        scoreIncrement();
    } else {
        score = 0;
        window.localStorage.setItem("score", score);
        score_container.innerText = localStorage.getItem("score")
        
    }
    window.location.reload()
}

function startGame() {
    score = Number(localStorage.getItem("score"))
    score_container.innerText = score
  quesColor = randomColorCode();
  color_code.innerText = quesColor;

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);

    div.style.backgroundColor = i === ansIndex ? quesColor : randomColorCode();
    option_container.append(div);
    
  }
}
window.addEventListener("load", () => startGame());

reset.addEventListener("click",()=>{
    localStorage.removeItem("score")
    window.location.reload()
})



