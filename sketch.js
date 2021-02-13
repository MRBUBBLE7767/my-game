var setting,settings,test,form ,name,bg,gameState,playButton;
function preload(){
  setting = loadImage("setting1.png");
  bg = loadImage("bg.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  test = 1;
  gameState = "home";
  settings = createSprite(50,50,20,20);
  settings.addImage(setting);
  settings.scale=0.2
  playButton = createButton("Play");
  playButton.position(800,400);
}

function draw() {
  background(bg);
  drawSprites();
  textSize(50);
  fill("white"); 
  text("Laundry Shooter",displayWidth/2-20,100);
  if(mousePressedOver(settings)){
    form = new Form()
    form.display();
  } 
  if(mousePressedOver(playButton)){
    settings.visibile = false ;
  } 

  
  
} 