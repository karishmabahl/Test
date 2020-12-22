class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        super.display();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
    }
}


/*class Bird{
    constructor(x,y){
        // friction- always positive and is in the range (0, 1)
        // density- 0.001 default
        // restitution- always positive and is in the range (0, 1)
        var  options = {
            restitution: 0.5,
            friction: 1,
            density:1.0
        }
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/bird.png");
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        // strokeWeight(4);
        // stroke("green");
        // fill("red");
        // rect(0, 0,this.width,this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}*/