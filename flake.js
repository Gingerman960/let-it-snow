function Flake() {
    this.x = random(width);
    this.y = random(-2500, -10);
    this.z = random(20);
    this.size = map(this.z, 1, 20, 1, 9);
    this.yspeed = map(this.size, 0, 9, 0.01, 2);
    this.meltTime = map(this.size, 1, 9, 500, 3500);
    //this.yspeed = random(0.1, 2);

    this.fall = () => {
        this.y = this.y +=this.yspeed;
        this.grav = map(this.z, 0, 20, 0, 0.03);
        this.yspeed = this.yspeed += this.grav;
        if (this.y >= height - this.size - 5) {
            this.yspeed = 0;
            this.grav = 0;
            setTimeout(() => {
                this.y = random(-2500, -10);
                this.yspeed = map(this.z, 0, 10, 0.1, 3);
                this.grav = map(this.z, 0, 20, 0, 0.05);
            }, this.meltTime);
        }
    };

    this.show = () => {
        ellipse(this.x, this.y, this.size);
        //line(this.x, this.y, this.x+this.width, this.y+this.height);
    };
}
