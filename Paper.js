class Paper {
constructor(x,y,radius){
var options = {
isStatic: false,
restitution: 0.3,
friction: 0.5,
density: 1.2
}
this.x=x;
this.y=y;
this.radius=radius;

this.image=loadImage("paper.png")
this.body=Bodies.circle(this.x,this.y,this.radius,options);
World.add(world, this.body);
}
display() {
var pos=this.body.position;

//ellipse(this.x, this.y, this.radius)     
push()
translate(pos.x,pos.y);
rectMode(CENTER)
fill('pink')
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop()
}
}