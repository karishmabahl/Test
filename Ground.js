class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width= w;
        this.height = h;
        World.add(world,this.body);
        this.image = loadImage("sprites/ground.png");
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}