window.addEventListener('load', function(){

    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40;

  let colorArray = [

    '#327da8',
    '#1d1a7a',
    '#87db60',
    '#a3a2ab',
    '#3b3b3b',
  ];

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(){

  width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        init();
});

        function Circle(x, y, dx, dy, radius){
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.minRadius = radius;
          this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
          
          this.draw = function(){
            ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
          }
          this.update = function(){
            if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
              this.dx = -this.dx;
            }
  
            if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
              this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
              && mouse.y - this.y < 50 && mouse.y - this.y > -50
              ){
                if(this.radius < maxRadius){
                  this.radius += 1;
                }
            } else if(this.radius > this.minRadius){
              this.radius -= 1;
            }
            this.draw();
          }
        }


        let circleArray = [];

        function init() {
        
          circleArray = [];
          
          for(let i = 0; i < 500; i++){
            let radius = Math.random() * 3 + 1;
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
  
            let dx = (Math.random() - 0.5) * 3;
            let dy = (Math.random() - 0.5) * 3;
            circleArray.push(new Circle(x, y, dx, dy,radius));
          }
        }

        function animate(){

          ctx.clearRect(0, 0, width, height);

          for(let i = 0; i < circleArray.length; i++){
            circleArray[i].update();
          }

          requestAnimationFrame(animate);
        }
        init(),
        animate();
});