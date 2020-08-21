//Creating global variables
var bananaImg, banana;
var obstacleImg, obstacles;
var obstacleGroup;
var backgroundImg,bground;
var score = 0;
var monkey2,monkey;
var bananaGroup;
var invland;


//function to load all images and animations
function preload () {
  
  
  
  backgroundImg = loadImage("jungle.png");
   monkey2=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  
  obstacleImg = loadImage("stone.png");
  
  invland = loadImage("banana.png");
}


//setting the game by creating all the sprites
function setup() {
  createCanvas(400, 400);
 
invland = createSprite(0,100,400,10);
  
  
  

bground = createSprite(200,200,200,200);
bground.addImage(backgroundImg);
bground.scale = 2;

bground.x = bground.width /2;
bground.velocityX = -(2 + 3*score/100);  
  
  

monkey = createSprite(100,300,20,20);
monkey.addAnimation("monkeyrun",monkey2);
monkey.scale = 0.10;

  
ground = createSprite(200,340,600,20);
ground.visible = false;
  
//groups for obstacle and banana
obstacleGroup = new Group();
bananaGroup = new Group();
 
}

function draw() {
  background(220);
  
  
  //making monkey collide with ground
  monkey.collide(ground);
  
  
  //resetting background
  if(bground.x < 0){
    bground.x = bground.width/2;
  } 
   
  //making monkey jump
  if(keyDown("space")){
    monkey.velocityY = -25;
   }
  
  
  //scoring
if (bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score +2;
}
  
  //reducing size of monkey if it hits an obstacle
if(obstacleGroup.isTouching(monkey)){
   monkey.scale = 0.07;
}


  //increasing size of monkey if it hits a particular score
monkey.velocityY = monkey.velocityY + 1.5
  
switch (score){
          case 10: monkey.scale = 0.12;
                  break;
          case 20: monkey.scale = 0.14;
                  break;
          case 30: monkey.scale = 0.16;
                  break;
          case 40: monkey.scale = 0.18;
                  break;
           default: break;
}

  //calling the functions for spawning bananas and obstacles
  stones();
  bananas();
  
  
  drawSprites();
  
  
  //printing the score
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+score,270,70);
}

//functions for bananas and obstacles
function bananas(){
  //creating a banana every 80 frames
  if(frameCount%80 === 0){
    var banana = createSprite(400,140,20,20);
    banana.y = random(149,220);
    banana.addImage(bananaImg);
    banana.scale = 0.09;
    //giving speed to the bananas
    banana.velocityX = -6;
    //giving them a lifetime to prevent game from crashing
    banana.lifetime = 200;
    //adding the bananas in a group
    bananaGroup.add(banana);
  }
}
function stones(){
  //spawning stones every 300 frames
  if(frameCount%170 === 0){
    var stone = createSprite(400,330,40,40);
    stone.scale = 0.2;
    stone.addImage(obstacleImg);
    //adding the stones to the stone group
    obstacleGroup.add(stone);
    //giving speed to the stones 
    stone.velocityX = -6;
    //giving lifetime to stones to prevent game from crashing
    stone.lifetime = 200;
  }
}


















