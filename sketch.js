var fixedRECT, moveRECT;

function setup() {
  createCanvas(1200,800);
  fixedRECT = createSprite(400,100,70,80);
  fixedRECT.shapeColor = "red";
  moveRECT = createSprite(400,800,70,80);
  moveRECT.shapeColor = "red";
  fixedRECT.debug=true;
  moveRECT.debug=true;
  
  moveRECT.velocityY = -14;
  fixedRECT.velocityY = 14;
}

function draw() {
  background(0,0,0);
    
  bounceOff(moveRECT,fixedRECT);
  
  
  drawSprites();
}

