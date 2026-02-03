let score = 0;

const ball = document.getElementById("ball");
const btn = document.getElementById("shootBtn");
const scoreText = document.getElementById("score");
const msg = document.getElementById("message");

btn.addEventListener("click", shoot);

function shoot() {

  const hit = Math.random() > 0.3;

  ball.style.bottom = "190px";

  setTimeout(() => {

    if (hit) {
      score++;
      msg.innerHTML = "💗 Perfect shot!";
    } else {
      msg.innerHTML = "💔 Missed! Try again!";
    }

    scoreText.innerHTML = "Score: " + score;

    ball.style.bottom = "15px";

    if (score === 5) {
      win();
    }

  }, 800);
}

function win() {

  msg.innerHTML = `
  💕 You won my heart 💕 <br>
  Will you be my Valentine? ❤️
  `;

  btn.disabled = true;
}

createHearts();

function createHearts() {

  const container = document.querySelector(".hearts");

  setInterval(() => {

    const heart = document.createElement("span");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 400);
}
