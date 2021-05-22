class Mango{
	constructor(x,y,diametre)
	{
		var options={
			isStatic:true,
			'restitution' :0,
            'friction' :1
			}
		this.body=Bodies.circle(x, y, diametre, options)
		this.diamtre=diametre;
		this.image=loadImage("images/mango.png")
		World.add(world, this.body);
	}

	display()
	{
			
		push();
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image , 0,0, this.diametre);
		
		pop();
 }
}