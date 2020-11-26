class Drop{
constructor(x,y){
    var options ={
        restitution:0.1,
        density:0.05,
        friction:0.001,
        
    }
    this.drop = Bodies.circle(x,y,5,options);
    this.r = 5;

    World.add(world,this.drop);
}

update(){
    if(this.drop.position.y > height ){
        Matter.Body.setPosition(this.drop,{x:random(0,600),y:random(0,700)});

    }
}

display(){
var pos = this.drop.position;
fill("blue");
ellipseMode(CENTER);    
ellipse(pos.x,pos.y,this.r,this.r);

}


}