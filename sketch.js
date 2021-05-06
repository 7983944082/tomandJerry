var cat,catImage1;
var bg;
var mouse,mouseImage1;   

function preload() {
    catImage1 = loadAnimation("images/cat1.png");
    bg= loadImage("images/garden.png");
     mouseImage1=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    cat= createSprite(870,600);
    cat.addAnimation("catSleeping",catImage1);
    cat.scale=0.2;
    mouse= createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImage1);
    mouse.scale=0.2;

}

function draw() {

    background(bg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
       cat.velocityX = -5; 
       cat.addAnimation("catRunning", catImg2);
       cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}


