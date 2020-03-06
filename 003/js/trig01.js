window.addEventListener('load', () => {

  let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

let centerY = height * .5,
    centerX = width * .5,
    baseAlpha = 0.5,
    offset = 0.5,
    speed = 0.1,
    angle = 0;

    render();

    function render(){

      let alpha = baseAlpha + Math.sin(angle) * offset;

      ctx.fillStyle = "rgba(0, 0, 0," + alpha + ")";
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
      ctx.fill();

      angle += speed;

      requestAnimationFrame(render);
    }
});