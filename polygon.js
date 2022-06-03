class Polygon{
    constructor(x,y,sides,radius){
        var options={
            isStatic:false
        }
        this.body = Matter.Bodies.polygon(x,y,sides,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
    var  angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0,this.radius, this.radius);
    pop();
    }
}


    
    
