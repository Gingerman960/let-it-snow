function Flake() {
    this.x = random(width);
    this.y = random(-100, -10);
    this.z = random(20);
    this.size = map(this.z, 1, 20, 1, 9);
    this.yspeed = map(this.size, 0, 9, 0.001, 1);
    this.fallAngle = random(0, 2 * PI);
    this.meltTime = map(this.size, 1, 9, 500, 3500);
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.fall = () => {
        // snow with snowDrifts, works horrible, before enabling comment regular snow

        //this.meltTime = map(this.size, 1, 9, 100, 700);
        /*for (let i = 0; i < drift.length; i++) {
            if (this.x >= drift[i].x && this.x <= drift[i].x + blockWidth) {
                if (this.y >= drift[i].y - this.size - 2) {
                    this.yspeed = 0;
                    this.grav = 0;
                    drift[i].y -= this.size / 300;
                    setTimeout(() => {
                        let index = snow.indexOf(this);
                        if (index !== -1) {
                            snow.splice(index, 1);
                        }
                        drift[i].y += this.size / 300;
                    }, this.meltTime + gravity / 1000);
                } else {
                    let angle = 0.6 * frameCount / 60 + this.fallAngle;
                    this.x = width / 2 + this.radius * sin(angle);
                    this.y = this.y += this.yspeed;
                    this.grav = map(this.z, 0, 20, 0, 0.03);
                    this.yspeed = this.yspeed += this.grav + gravity;
                }
            }
        }*/


        // regular snow
        if (this.y >= height - this.size - 5) {
            this.yspeed = 0;
            this.grav = 0;
            setTimeout(() => {
                let index = snow.indexOf(this);
                if (index !== -1) {
                    snow.splice(index, 1);
                }
            }, this.meltTime + gravity / 1000 - intensity * 100);
        } else {
            let angle = 0.6 * frameCount / 60 + this.fallAngle;
            this.x = width / 2 + this.radius * sin(angle);
            this.y = this.y += this.yspeed;
            this.grav = map(this.z, 0, 20, 0, 0.03);
            this.yspeed = this.yspeed += this.grav + gravity;
        }
    };

    this.show = () => {
        ellipse(this.x, this.y, this.size);
    };
}
