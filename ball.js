function Ball() {
    this.x = 300;
    this.y = 300;
    this.xspeed = 1;
    this.yspeed = 0;


    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 10, 10);   
    }

    this.update = function() {
        this.y = this.y + this.yspeed * scl;
        this.x = this.x + this.xspeed * scl;
        this.y = constrain(this.y, 0, height);
        this.x = constrain(this.x, 0, width);
    }

    this.collide = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
        
    }

    this.reset = function(){
        this.x = 300;
        this.y = 300;
        this.yspeed = 0;
    }
}