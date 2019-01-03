var p1;
var p2;
var scl = 10;
var b;
var score = '0       0';
var lscore = 0;
var rscore = 0;

function setup() {
    createCanvas(600, 600);
    p1 = new Paddle(50, 300);
    p2 = new Paddle(550, 300);
    b = new Ball();
    frameRate(20);
}

function draw() {
    background(100);

    textAlign(CENTER)
    textSize(70);
    fill(255,50);
    text(score, 300, 300);
    

    p1.update();  
    p2.update();
    p1.show();
    p2.show();
    b.update();
    b.show();

    if(b.x == 0 || b.x == 600){
        if(b.x == 0){
            rscore++;
        }
        else{
            lscore++;
        }
        score =lscore.toString() + '       ' + rscore.toString();
        b.reset();
    }

    else if(b.y == 0 || b.y == 600) {
        b.collide(b.xspeed, b.yspeed * -1);
    }

    else if(b.x == p1.x && p1.yspeed == 0){
        console.log("left paddle hit");
        for(let i = 0, py = p1.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p1.yspeed);
            }
        }
    }
    else if(b.x == p1.x && p1.yspeed == 1){
        console.log("left paddle hit");
        for(let i = 0, py = p1.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p1.yspeed);
            }
        }
    }
    else if(b.x == p1.x && p1.yspeed == -1){
        console.log("left paddle hit");
        for(let i = 0, py = p1.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p1.yspeed);
            }
        }
    }
    else if(b.x == p2.x && p2.yspeed == 0){
        console.log("right paddle hit");
        for(let i = 0, py = p2.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p2.yspeed);
            }
        }
    }
    else if(b.x == p2.x && p2.yspeed == 1){
        console.log("right paddle hit");
        for(let i = 0, py = p2.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p2.yspeed);
            }
        }
    }
    else if(b.x == p2.x && p2.yspeed == -1){
        console.log("right paddle hit");
        for(let i = 0, py = p2.y - 34; i < 70; i++){
            if((py + i) == b.y){
                b.collide(b.xspeed * -1, p2.yspeed);
            }
        }
    }


}

function keyPressed() {
    if (keyCode === 87) {
        p1.dir(-1);
    }
    else if (keyCode === 83) {
        p1.dir(1);
    }
    else if (keyCode === UP_ARROW) {
        p2.dir(-1);
    }
    else if (keyCode === DOWN_ARROW) {
        p2.dir(1);
    }
}