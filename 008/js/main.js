window.addEventListener('load', function() {

  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  particles = [],
  numParticles = 100;

  for(let i = 0; i < numParticles; i += 1){
    particles.push(particle.create(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
  }

update();

function update(){
  ctx.clearRect(0, 0, width, height);

  for(let i = 0; i < numParticles; i += 1){
    let p = particles[i];
    p.update();

    ctx.beginPath();
    ctx.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(0, 180, 250, .5)";
    ctx.fill();
  }
  requestAnimationFrame(update);
}

});

