function Pong() {






        this.score = function() {

        }

        this.reset = function(paused) {
            let alpha = paused ? fill(255,50) : fill(255,0);
            
            textAlign(CENTER);
            textSize(40);
            noStroke();
            text('Press SPACE to begin', 300, 400);
        }
}