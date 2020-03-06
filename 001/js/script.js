window.addEventListener('load', () => {

  let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, width, height);

for(let i = 0; i < 100; i += 1){
  ctx.beginPath();
  ctx.moveTo(Math.random() * width, Math.random() * height);
  ctx.lineTo(Math.random() * width, Math.random() * height);
  ctx.stroke();
}
});