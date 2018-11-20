var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var circleArray = [];

function Circle(x, y, dx, dy, r, red, green, blue){
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.r = r;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
    c.stroke(); 
  }
  this.x = innerWidth * 0.5;
  this.y = innerHeight * 0.5;  
  this.update = function(){

    if(this.x + r > innerWidth || this.x - this.r < 0){
      this.dx = -this.dx;
    }
    this.x += this.dx;

    if(this.y + r > innerHeight || this.y - this.r < 0){
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.draw();
  }
}




for (var i = 0; i<100; i++){
  var r = 30;

  var x = Math.random() * (innerWidth - r * 2) + r;
  var y = Math.random() * (innerHeight - r * 2) + r;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var red= Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  circleArray.push(new Circle(x, y, dx, dy, r, red, green, blue ));
}


// animate function
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

