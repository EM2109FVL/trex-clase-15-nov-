var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle;
var obstacle1, obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var score=0;
var play
var END = 0 ;



function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloud = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle3.png");
}

function setup() {

  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar numeros aleatorios
  var rand =  Math.round(random(1,100))
  console.log(rand);

  console.log("a mimir"+trex.y);


}

function draw() {
  //establecer color de fondo
  background(180);

  text("puntuacion"+score,500,50);
 

  if(gameState---play){
    if(ground.x < 0){
      ground.x = ground.width/2;
  
    }
    score=score+math.round(framecount/60);
    if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -10;
    }
    
    trex.velocityY = trex.velocityY + 0.8;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //evitar que el Trex caiga
    trex.collide(invisibleGround);


  }
  else if(gameState===END){
    ground.velocityX=0;
    //lo que pasa cuando perdemos el juego 




  }
  console.log(trex.y);
  
  
  
  
  
  
  //aparecer nubes
  spawnClouds();
  spawnobstacles();
  drawSprites();
}
  

//función para aparecer las nubes
function spawnClouds(){
 //escribir aquí tu código
 if(frameCount%60 ---0){
 var cloud=createSprite(600,100,40,10);
 cloud.velocityX=-3;
 cloud.addImage(cloudImage);
cloud.y-Math.round(random(10,80));
cloud.scale-0.7;
cloud.depth=trex.depth;
trex.depth=trex.depth+1;
cloud.lifetime=200;
}
console.log("Aqui se deben crear las nubes");
console.warm(frameCount);
}
function spawnobstacles(){
  if(frameCount % 60 === 0){
obstacle-createSprite(600,165,10,40);
    obstacle.velocityX=-6;

    var rand = math.round(random(1.6));

    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle1);
      break;
      case 3:obstacle.addImage(obstacle1);
      break;
      case 4:obstacle.addImage(obstacle1);
      break;
      case 5:obstacle.addImage(obstacle1);
      break;
      case 6:obstacle.addImage(obstacle1);
      break;
      default:
      obstacle.stale-0.5;
      obstacle.lifetime=300;




    }
  }
}
  



