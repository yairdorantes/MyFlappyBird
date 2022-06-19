const d = document;
const w = window;
var canvas = d.getElementById("canvas");
var ctx = canvas.getContext("2d");
var icon = new Image();
var bg = new Image();

const canvaSize = 600;
icon.src = "assets/bird2.png";
bg.src = "assets/bg.jpg";
var bird = {
  x: 50,
  y: 50,
  vx: 0,
  vy: 4,
};
var pipe = {
  x: 250,
  Width: 24,
  LargeBottom: 24,
  gap: 200,
};
var cont = 0;
var best = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //bird.draw();
  //ctx.drawImage(bg, 0, 0);

  ctx.drawImage(icon, bird.x, bird.y, 35 * (600 / 500), 35);
  bird.x += bird.vx;
  bird.y += bird.vy;
  ctx.fillStyle = "green";
  pipe.x -= 3;

  pipe.x < -pipe.Width &&
    ((pipe.x = canvaSize), (pipe.LargeBottom = pipe.gap * Math.random()));

  ctx.fillRect(pipe.x, 0, pipe.Width, pipe.LargeBottom);
  ctx.fillRect(pipe.x, pipe.LargeBottom + pipe.gap, pipe.Width, 300);
  ctx.fillStyle = "black";
  ctx.fillText(cont++, 9, 25);
  best = best < cont ? cont : best;
  (((bird.y < pipe.LargeBottom || bird.y > pipe.LargeBottom + pipe.gap) &&
    pipe.x < 50 * (600 / 500)) ||
    bird.y + bird.vy > canvas.height) &&
    ((bird.vy = 0),
    (bird.y = 200),
    (pipe.x = canvaSize),
    alert(`Score: ${cont}`));

  if (bird.vy < -4) {
    bird.vy = -4;
  }
  if (bird.vy > 4) {
    bird.vy = 4;
  }

  // paint = w.requestAnimationFrame(draw);
}

setInterval(draw, 14);

var click = false;
// canvas.addEventListener("click", (e) => {
//   paint = w.requestAnimationFrame(draw);
// });

d.addEventListener("click", (e) => {
  if (e) {
    bird.vy = bird.vy - 10;
    click = true;
    setTimeout(function () {
      click = false;
    }, 250);
  }
});

setInterval(function () {
  if (click === false) {
    bird.vy = bird.vy + 10;
  }
}, 200);
