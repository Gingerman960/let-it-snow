function Flake() {
    this.x = random(width);
    this.y = random(-1500, -50);
    this.size = random(2, 10);
    this.yspeed = random(0.5, 2);

    this.fall = () => {
        this.y = this.y +=this.yspeed;
        this.grav = random(0, 0.2);
        this.yspeed = this.yspeed += this.grav;
        if (this.y > height) {
           this.y = random(-200, -50);
           this.yspeed = random(3, 7);
        }
    };

    this.show = () => {
      strokeWeight(this.size);
        stroke('white');
        line(this.x, this.y, this.x+this.size, this.y+this.size);
    };
}
