let bubble1;
let bubble2;
function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(random(100,300),random(100,400),50);
  bubble2 = new Bubble(random(100,200),random(100,400),20);
}

function draw() {
  background(0);

  if(bubble1.intersects(bubble2)){
  background(100, 0, 255);
  }

  bubble1.show()
  bubble2.show()
  bubble1.move()
  bubble2.move()
}
class Bubble{
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  intersects(other){
    let d = dist(this.x,this.y,other.x,other.y);
    return (d < this.r + other.r)

  }

  show(){
    noFill()
    strokeWeight(4);
    stroke(230,0,100);
    ellipse(this.x,this.y,this.r * 2);
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}
