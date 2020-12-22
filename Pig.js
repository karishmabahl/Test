class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/enemy.png");
    }
}


/*class Pig{
    constructor(x,y){
        // friction- always positive and is in the range (0, 1)
        // density- 0.001 default
        // restitution- always positive and is in the range (0, 1)
        var  options = {
            restitution: 0.5,
            friction: 0.3,
            density:1.0
        }
        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
       var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0,this.width,this.height);
        pop();
    }
}*/