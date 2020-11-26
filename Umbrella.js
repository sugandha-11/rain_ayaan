class Umbrella {
    constructor(x,y){
        var opt = {
            isStatic:true
        }

        this.image = loadImage("images/WalkingFrame/walking_1.png");
        
        this.umbrella = Bodies.rectangle(x,y,50,50,opt);
        this.w = 50;
        this.h = 50;

        World.add(world,this.umbrella);
    }
    
    display(){
        var loc = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,loc.x,loc.y,400,400);
    }
}