class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false,
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.paper=loadImage("paper.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        rectMode(CENTER)
        fill(255);
        image(this.paper, 0,0,this.r, this.r)
        pop();
      } 
}
