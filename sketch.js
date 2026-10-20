let soundMaker;

function setup() {
  createCanvas(400, 400);
  soundMaker = new p5.Oscillator('sine');
}

function draw() {
  background(200);
  
  // Draw the wave
  stroke(0);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {
    // Make the wave move across the screen
    let y = height / 2 + sin(x * 0.05 + frameCount * 0.1) * 50;
    vertex(x, y);
  }
  endShape();
  
  text("Press 7, 8, or ENTER on your pad", 20, 20);
}

function keyPressed() {
  // Start the sound when a key is pressed
  soundMaker.start();
  
  // Change the sound based on the key
  if (key === '7') {
    soundMaker.freq(261); // Middle C note
  } else if (key === '8') {
    soundMaker.freq(293); // D note
  } else if (keyCode === ENTER) {
    soundMaker.freq(130); // Deep low note
  }
}

function keyReleased() {
  // Stop the sound when you let go of the key
  soundMaker.stop();
}
