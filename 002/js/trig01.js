window.addEventListener('load', () => {

  let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

ctx.translate(0, height / 2);
ctx.scale(1, -1);

for(let angle = 0; angle < Math.PI * 2; angle += .01){
  let x = angle * 200,
  y = Math.sin(angle) * 200;

  ctx.fillRect(x, y, 5, 5);
}
});