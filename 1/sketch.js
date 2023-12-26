let d;
let w, h;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  d = pixelDensity();
}

function draw() {
  capture.loadPixels();
  for(let i=0; i<w*h*d*4; i+= 4*d){
    for(let j=0; j<d; j++) {
    // Clear the reds
    capture.pixels[i+0+(j*4)] = 0;

    // Clear the greens
    capture.pixels[i+1+(j*4)] = 0;

    // Clear the blues
    //capture.pixels[i+2+(j*4)] = 0;
    }
  }
  capture.updatePixels();
  image(capture, 0, 0, w, h);
}
