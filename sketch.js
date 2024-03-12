let counter = 0;

let countInterval = setInterval(paintSplatter, 100);

function setup() {
  createCanvas(600, 300);
  background(100,100,100);
}

function paintSplatter(){
  fill(200, 200, 200);
  ellipse(random(0,600), random(0,300), 30, 30);
  line(random(200,50), random(10,400), random(600), random(300));
  counter++;
  if (counter > 50){
    clearInterval(countInterval);
    counter = 0;
  }
}

function mousePressed() {
  countInterval = setInterval(paintSplatter, 100);
}