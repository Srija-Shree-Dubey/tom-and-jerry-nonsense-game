var BI;
var CI1;
var MI1;
var CI2;
var MI2;
var CI3;
var MI3;

var TOM;
var JERRY;

function preload()
 {
  //load the images here
  BI = loadImage("images/garden.png");
  CI1 = loadImage("images/cat1.png");
  MI1 = loadImage("images/mouse1.png");
  CI2 = loadAnimation("images/cat2.png","images/cat3.png");
  MI2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  CI3 = loadAnimation("images/cat4.png");
  MI3 = loadAnimation("images/mouse4.png");  
}

function setup()
{
    createCanvas(900,543);
    //create tom and jerry sprites here
    TOM = createSprite(700,475,100,150);
    TOM.addImage(CI1);
    TOM.scale = 0.1;
    JERRY = createSprite(100,475,100,150);
    JERRY.addImage(MI1);
    JERRY.scale = 0.1;
}

function draw() 
{

    background(BI);
    //Write condition here to evalute if tom and jerry collide
    if(TOM.x - JERRY.x < (TOM.width - JERRY.width)/2)
    {
      JERRY.addAnimation("mouseHappy",MI3);
      JERRY.changeAnimation("mouseHappy");
      
      TOM.addAnimation("catHappy",CI3);
      TOM.changeAnimation("catHappy");
      TOM.velocityX = 0;
      TOM.x = 190;
    }
    
    drawSprites();
}


function keyPressed()
{

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW)
  {
      JERRY.addAnimation("mouseTeasing",MI2);
      JERRY.changeAnimation("mouseTeasing");
      
      TOM.addAnimation("catWalking",CI2);
      TOM.changeAnimation("catWalking");
      TOM.velocityX = -3;
  }

}
