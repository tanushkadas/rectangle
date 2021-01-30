var rectangle1
var rectangle2

function setup() {
  createCanvas(1200,400);
  colorSprite("green");
}

function draw() {
  background(0);  
  drawSprites();
}

function colorSprite(spritecolor){
  rectangle1= createSprite(600, 200, 50, 50);
  rectangle2= createSprite(600, 300, 50, 50);
  rectangle1.shapeColor=spritecolor
  rectangle2.shapeColor=spritecolor
}