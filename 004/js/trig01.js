window.addEventListener('load', () => {

  let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

centerX = width / 2,
centerY = height / 2,
xRadius = 200,
yRadius = 400,
xangle = 0,
yangle = 0,
xspeed = .1,
yspeed = .131;
let x = null,
y = null;

render();

function render(){
  ctx.clearRect(0, 0, width, height);
  x = centerX + Math.cos(xangle) * xRadius;
  y = centerY + Math.sin(yangle) * yRadius;
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI * 2, false);
ctx.fill();

xangle += xspeed;
yangle += yspeed;
requestAnimationFrame(render);
}

});