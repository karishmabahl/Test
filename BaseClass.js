class BaseClass {

    constructor(x, y,w,h,angle) {
        // friction- always positive and is in the range (0, 1)
        // density- 0.001 default
        // restitution- always positive and is in the range (0, 1)
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 1.0
        }
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/base.png");
        this.body = Bodies.rectangle(x, y, w,h, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }






}