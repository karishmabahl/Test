class Box extends BaseClass{
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.image = loadImage("sprites/wood1.png");
    }
}




/*class Box{
    constructor(x,y,w,h){
        // friction- always positive and is in the range (0, 1)
        // density- 0.001 default
        // restitution- always positive and is in the range (0, 1)
        var  options = {
            restitution: 0.5,
            friction: 1,
            density:1.0
        }
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
       var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0,this.width,this.height);
        pop();
    }
}*/