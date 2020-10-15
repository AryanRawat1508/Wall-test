var bullet,thickness,wall;
var speed,weight;
function setup() {
  createCanvas(1300,500);
  
  speed=random(221,321)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,10)
  
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83)
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  console.log(speed)
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   
hasCollided();

if(hasCollided(bullet,wall))
{
 bullet.velocityX=0;
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
   wall.shapeColor=color(0,255,0);
}

console.log("damage")
  }
  drawSprites();
}
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
{
 return true
}
 return false;
}
