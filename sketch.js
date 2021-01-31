var fixedRect, movingRect, wall, car;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(750,400,20,800);
  wall.shapeColor = "pink";
  car = createSprite(300,300,80,40);
  car.shapeColor = "red";
  car.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall)){  
    fill("blue");
    text("is touching", 400,400);
  }
   else{
     fill("blue");
     text("not touching",400,400);
   }
   collide(car, wall);
   bounceOff(car, wall);
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = (-1)*5;
    }

}