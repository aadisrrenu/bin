class Paper {

    constructor(x, y, radius) {

        var options = {
            isStatic:false,
            restitution: 0.8,
            friction: 1,
            dencity: 2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(color) {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);

        fill(color);
        ellipseMode(RADIUS);
        circle(0, 0, this.radius);

        pop();
    }

    update() {

        if (keyDown("right")) {

            Matter.Body.applyForce(this.body, this.body.position, { x: 200, y: -150 });

        }
    }
}