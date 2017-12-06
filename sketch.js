var myImage;

function preload(){
    myImage = loadImage("./assets/background-01.jpg");
}

function setup() {

	// Create the canvas
	createCanvas(700,700);
    imageMode(CENTER);
    //background(255);
    image(myImage,width/2,height/2,700,700);


	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {

	//get the volume
	var volume = mic.getLevel();

	//background(200);

	push();

	//Start with transformations
	//move to the center of the canvas
	//translate(width / 2, height / 2);

	// Set the new size. Volume goes from 0 to 1.
	// You can remap it to any size you want.
	var minSize = 39;
	var maxSize = 50;
	var size = map(volume, 0, 1, minSize, maxSize);

	//draw an ellipse
    noStroke();
    fill(67+volume*50,63+volume*50,75+volume*50);
	ellipse(181, 376, size);
    ellipse(230, 376, size);
    ellipse(326, 326, size);
    ellipse(369, 326, size);
    ellipse(463, 384, size);
    ellipse(507, 384, size);
    
    fill(159+volume*30,160+volume*30,138+volume*30);
    ellipse(174, 371, 7);
    ellipse(240, 371, 7);
    ellipse(319, 320, 7);
    ellipse(380, 320, 7);
    ellipse(457, 377, 7);
    ellipse(514, 377, 7);

	//All transformation are now dropped and the coordinate system is resetted.
	pop();

}

//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}