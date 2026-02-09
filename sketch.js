function setup() {
    createCanvas(600, 400);
    noStroke();
}

function draw() {
    // Plate background
    background(240, 245, 250);
    
    // Plate
    fill(255, 250, 240);
    ellipse(300, 200, 300, 150);
    
    // Plate rim
    fill(220, 210, 200);
    ellipse(300, 200, 310, 160);
    fill(255, 250, 240);
    ellipse(300, 200, 290, 140);
    
    // Toast (main element)
    fill(210, 180, 140);
    quad(250, 180, 350, 170, 340, 250, 260, 240);
    
    // Butter on toast
    fill(255, 245, 180);
    quad(270, 190, 320, 185, 315, 215, 275, 220);
    
    // Egg white
    fill(255, 255, 245);
    ellipse(200, 220, 80, 60);
    
    // Egg yolk
    fill(255, 220, 100);
    ellipse(200, 220, 40, 40);
    
    // Coffee cup
    fill(230, 200, 180);
    rect(100, 250, 60, 50, 5);
    
    // Coffee
    fill(80, 60, 40);
    rect(105, 255, 50, 40, 3);
    
    // Cup handle
    fill(230, 200, 180);
    ellipse(165, 275, 20, 15);
}
