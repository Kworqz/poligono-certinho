class SlingShot{
	constructor(bodyA,pointB)
	{
		
		var options={ 
            bodyA:bodyA,			 
			pointB: pointB,
			stiffness:0.04, 
			length:1
			
		}
		
		this.bodyA=bodyA
		this.pointB= pointB
		this.SlingShot=Constraint.create(options)
		World.add(world,this.SlingShot)
	}

	

	fly()
	{
		this.SlingShot.bodyA=null;
	}

	display()
	{
		if(this.SlingShot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			fill("cyan");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
    }
}