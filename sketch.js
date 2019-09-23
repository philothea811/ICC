function setup() {
  createCanvas(windowWidth, windowHeight);
  background(3,0,39);
  frameRate(4);
}

function draw() {
  if (mouseIsPressed) {
    translate(mouseX,mouseY);
    rotate(radians(frameCount));
    noStroke();
    fill(110,240,231);
  for (var cnt = 0; cnt < 6; cnt++) {  
      ellipse(0, -27, 29, 43);
      rotate(radians(60));
  }
  fill(124,171,174); // ash blue petals
  for (var cnt = 0; cnt < 12; cnt++) { 
    ellipse(0,-20, 8, 12);
    rotate(radians(30));
  }
  
  // center circle
  fill(255, 249, 187);
  ellipse(0, 0, 30, 30);
   }
    //2. white-viloet flower(left key)
  if (keyCode == LEFT_ARROW) {
  translate(mouseX,mouseY);
  noStroke();
  fill(255,255,255); // white petals
  for (var cnt = 0; cnt < 8; cnt++) { 
  ellipse(0,-15, 10, 25);
  rotate(radians(45));    
   }
  fill(110,26,90); // violet
  ellipse(0, 0, 18, 18);  
  }
//3. yellow flower (right key)
  if (keyCode ==  RIGHT_ARROW) {
  translate(mouseX,mouseY);
  noStroke();
  fill(248,239,045); // yellow petals
  for (var cnt = 0; cnt < 8; cnt++) { 
  ellipse(0,-15, 10, 20);
  rotate(radians(45));    
   }
  fill(216,215,210); // white
  ellipse(0, 0, 10, 10);  
  }

//4. pink flower(left key)
  if (keyCode == UP_ARROW) {
  translate(mouseX,mouseY);
  noStroke();
  fill(255,118,137); // pink petals
  for (var cnt = 0; cnt < 5; cnt++) { 
  ellipse(0,-15, 18, 20);
  rotate(radians(72));    
   }
  fill(255,255,255); // white petals
  for (var cnt = 0; cnt < 10; cnt++) { 
  ellipse(0,-12, 3,4);
  rotate(radians(36));    
   }
  fill(180,0,0); // 
  ellipse(0, 0, 14, 14);  
  }
    
    
}