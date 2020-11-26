
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var maxDrops = 100; 
var thunder, th1, th2, th3, th4;
var thunderframe = 0;

function preload(){
   th1 = loadImage("images/thunderbolt/1.png");
   th2 = loadImage("images/thunderbolt/2.png");
   th3 = loadImage("images/thunderbolt/3.png");
   th4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(600,800);

   engine = Engine.create();
   world = engine.world;
   
   umberalla1 = new Umbrella(300,600);
   
 if (frameCount % 300 === 0) {
    for(var i = 0; i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)));
       } 
 }



}

function draw(){
    Engine.update(engine);
    background(0);
    if(frameCount% 90 === 0){
        thunderframe = frameCount;
        thunder = createSprite(random(10,700),random(10,40));
         
        var rand = Math.round(random(1,4));

            switch(rand){
                case 1: thunder.addImage(th1);
                break;
                case 2: thunder.addImage(th2);
                break;
                case 3: thunder.addImage(th3);
                break;
                case 4: thunder.addImage(th4);
                break;
               default:break;
            }
   
    }
 
    if(thunderframe+10 ===frameCount && thunder){
        thunder.destroy();
    } 
    umberalla1.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update()
        
    }
    drawSprites();
}   

