window.addEventListener('load', function(){

    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        
        function Circle(x, y, dx, dy, radius){
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          
          this.draw = function(){
            ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = 'rgba(130, 0, 160, .3)';
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
            this.draw();
          }
        }
        
        let circleArray = [];
        for(let i = 0; i < 100; i++){
          let radius = 30;
          let x = Math.random() * (canvas.width - radius * 2) + radius;
          let y = Math.random() * (canvas.height - radius * 2) + radius;
          //速度
          let dx = (Math.random() - 0.5) * 3;
          let dy = (Math.random() - 0.5) * 3;
          circleArray.push(new Circle(x, y, dx, dy,radius));
          
        }

        function animate(){

          ctx.clearRect(0, 0, width, height);

          for(let i = 0; i < circleArray.length; i++){
            circleArray[i].update();
          }

          requestAnimationFrame(animate);
        }
        animate();
});