window.addEventListener('load', () => {

  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  arrowX = width / 2,
  arrowY = height / 2,
  dx = null,
  dy = null,
  angle = 0;

render();

function render(){
ctx.clearRect(0, 0, width, height);

ctx.save();
ctx.translate(arrowX, arrowY);
ctx.rotate(angle);

ctx.beginPath();
ctx.moveTo(20, 0);
ctx.lineTo(-20, 0);
ctx.moveTo(20, 0);
ctx.lineTo(10, -10);
ctx.moveTo(20, 0);
ctx.lineTo(10, 10);
ctx.stroke();

ctx.restore();
requestAnimationFrame(render);
}

document.body.addEventListener("mousemove", (event) => {
dx = event.clientX - arrowX;
dy = event.clientY - arrowY;
angle = Math.atan(dy / dx);
})();

});