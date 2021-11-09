var Tysu
var bullets

function setup() {
  createCanvas(1000,1000);
  Tysu=createSprite(500,500,15,20)

}



function draw() {
  background("black");
  spawnbullets();  
  drawSprites();
}

function spawnbullets(){

  if (frameCount % 100 === 0){
    bullets=createSprite(160,200,40,40)
    bullets.x=random(100,900);
    bullets.velocityY= 7
  }
}