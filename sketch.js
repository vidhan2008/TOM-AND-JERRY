var bgimage
var catimage1,cat
var catimage2
var mouseimage1 ,mouse
var mouseimage2

function preload() {
    //load the images here
   bgimage = loadImage("images/garden.png")
   catimage1 = loadImage("images/cat1.png")
   catimage2 = loadImage("images/cat2.png","images/cat3.png")
   mouseimage1 = loadImage("images/mouse1.png")
   mouseimage2 = loadImage("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    
}

function draw() {

    background(bgimage);

    mouse=createSprite(150,500,50,50)
    //Write condition here to evalute if tom and jerry collide
cat=createSprite(550,500,50,50)



if(cat.x - mouse.x> (cat.width - mouse.width)/2 ) {
    cat.addAnimation("catrunning",catimage2)
    
    cat.scale=0.2

    mouse.addAnimation("mouseTeasing",mouseimage2)
    
    mouse.scale=0.1
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg1)
    mouse.changeAnimation("mouseTeasing")
    
    
    }

if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2)
mouse.changeAnimation("mouseTeasing")

}






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

}
