let day = true; //makes it daytime when code runs
let starX = 0; //initial x value of shooting star
let starY = 0; //initial y value of shooting star
let moonSize = 290; //initial x position of moon blocker
let realMoonSize = 70; //initial size of moon blocker
let innerCircle = 55; //initial size of inner sun part
let expand = false; //inner sun part not initially expanding
let expandAmt = 0.1; //amt by which inner sun part expands
let cloudOne = 0; //initial x value of cloud one
let cloudTwo = 0; //initial x value of cloud two
let rainX = 0; //initial x value of rain
let rainY = 0; //initial y value of rain
let windowColor = 255; //the color (white) of windows in daytime
let square1X = -5;
let square1Y = -5;
let square2X = -5;
let square2Y = -5;
let square3X = -5;
let square3Y = -5;
let square4X = -5;
let square4Y = -5;
let square5X = -5;
let square5Y = -5; //all of these hide the nightime window blocker offscreen
let policeCarX = 500; //initial x value of police car
let carX = 420; // initial x value of red car
let siren;

//loads the sound before the scene plays
function preload() {
  siren = loadSound("dynamic_project/police-siren.mp3"); //siren sound
}


function setup() {
  createCanvas(400, 400); //creates a 400x400 canvas
}

function draw() {
  if (day == true) {
    //DAY SKY
    if (250 <= cloudOne && cloudOne <= 350) {
      background(210, 210, 255);
    } else {
      background(230, 240, 255);
    }
    //the daytime sky is light blue (darker if cloud blocks sun)

    //SUN
    fill("orange");
    strokeWeight(0);
    circle(300, 90, 80); //circle location and size
    fill(255, 200, 10); //circle color (light orange)
    circle(300, 90, innerCircle);
    if (innerCircle > 70) {
      expand = false;
    }

    if (innerCircle < 55) {
      expand = true;
    }
    if (expand == true) {
      innerCircle += expandAmt;
      //if inner circle < size 55, circle expands by 0.1 each time       the draw function is called
    } else {
      innerCircle -= expandAmt;
      //if inner circle > size 70, circle shrinks by 0.1 each time       the draw function is called
    }

    buildings();
    //call first building's windows function
    windows(0, 200, 8);
    windows(14, 200, 8);
    windows(28, 200, 8);
    windows(42, 200, 8);
    windows(0, 220, 8);
    windows(14, 220, 8);
    windows(28, 220, 8);
    windows(42, 220, 8);
    windows(0, 240, 8);
    windows(14, 240, 8);
    windows(28, 240, 8);
    windows(42, 240, 8);
    windows(0, 260, 8);
    windows(14, 260, 8);
    windows(28, 260, 8);
    windows(42, 260, 8);
    windows(0, 280, 8);
    windows(0, 300, 8);
    windows(14, 280, 8);
    windows(14, 300, 8);
    windows(28, 280, 8);
    windows(28, 300, 8);
    windows(42, 280, 8);
    windows(42, 300, 8);

    //calls second building's windows function
    windows(77, 150, 8);
    windows(77, 170, 8);
    windows(77, 190, 8);
    windows(77, 210, 8);
    windows(77, 230, 8);
    windows(77, 250, 8);
    windows(77, 270, 8);
    windows(77, 290, 8);
    windows(77, 310, 8);
    windows(92, 150, 8);
    windows(92, 170, 8);
    windows(92, 190, 8);
    windows(92, 210, 8);
    windows(92, 230, 8);
    windows(92, 250, 8);
    windows(92, 270, 8);
    windows(92, 290, 8);
    windows(92, 310, 8);
    windows(107, 150, 8);
    windows(107, 170, 8);
    windows(107, 190, 8);
    windows(107, 210, 8);
    windows(107, 230, 8);
    windows(107, 250, 8);
    windows(107, 270, 8);
    windows(107, 290, 8);
    windows(107, 310, 8);
    windows(122, 150, 8);
    windows(122, 170, 8);
    windows(122, 190, 8);
    windows(122, 210, 8);
    windows(122, 230, 8);
    windows(122, 250, 8);
    windows(122, 270, 8);
    windows(122, 290, 8);
    windows(122, 310, 8);

    //calls third building's windows function
    windows(157, 180, 8);
    windows(157, 200, 8);
    windows(157, 220, 8);
    windows(157, 240, 8);
    windows(157, 260, 8);
    windows(157, 280, 8);
    windows(157, 300, 8);
    windows(172, 180, 8);
    windows(172, 200, 8);
    windows(172, 220, 8);
    windows(172, 240, 8);
    windows(172, 260, 8);
    windows(172, 280, 8);
    windows(172, 300, 8);
    windows(187, 180, 8);
    windows(187, 200, 8);
    windows(187, 220, 8);
    windows(187, 240, 8);
    windows(187, 260, 8);
    windows(187, 280, 8);
    windows(187, 300, 8);
    windows(202, 180, 8);
    windows(202, 200, 8);
    windows(202, 220, 8);
    windows(202, 240, 8);
    windows(202, 260, 8);
    windows(202, 280, 8);
    windows(202, 300, 8);

    //calls fourth building's windows function
    windows(237, 170, 8);
    windows(237, 190, 8);
    windows(237, 210, 8);
    windows(237, 230, 8);
    windows(237, 250, 8);
    windows(237, 270, 8);
    windows(237, 290, 8);
    windows(237, 310, 8);
    windows(252, 170, 8);
    windows(252, 190, 8);
    windows(252, 210, 8);
    windows(252, 230, 8);
    windows(252, 250, 8);
    windows(252, 270, 8);
    windows(252, 290, 8);
    windows(252, 310, 8);
    windows(267, 170, 8);
    windows(267, 190, 8);
    windows(267, 210, 8);
    windows(267, 230, 8);
    windows(267, 250, 8);
    windows(267, 270, 8);
    windows(267, 290, 8);
    windows(267, 310, 8);
    windows(282, 170, 8);
    windows(282, 190, 8);
    windows(282, 210, 8);
    windows(282, 230, 8);
    windows(282, 250, 8);
    windows(282, 270, 8);
    windows(282, 290, 8);
    windows(282, 310, 8);

    //calls fifth building's window function
    windows(318, 160, 8);
    windows(318, 180, 8);
    windows(318, 200, 8);
    windows(318, 220, 8);
    windows(318, 240, 8);
    windows(318, 260, 8);
    windows(318, 280, 8);
    windows(318, 300, 8);
    windows(333, 160, 8);
    windows(333, 180, 8);
    windows(333, 200, 8);
    windows(333, 220, 8);
    windows(333, 240, 8);
    windows(333, 260, 8);
    windows(333, 280, 8);
    windows(333, 300, 8);
    windows(348, 160, 8);
    windows(348, 180, 8);
    windows(348, 200, 8);
    windows(348, 220, 8);
    windows(348, 240, 8);
    windows(348, 260, 8);
    windows(348, 280, 8);
    windows(348, 300, 8);
    windows(363, 160, 8);
    windows(363, 180, 8);
    windows(363, 200, 8);
    windows(363, 220, 8);
    windows(363, 240, 8);
    windows(363, 260, 8);
    windows(363, 280, 8);
    windows(363, 300, 8);

    //road
    fill("black");
    rect(-10, 350, 500, 500);
    fill("white")
    rect(-10, 375, 500, 1)
    
    if (-10 <= policeCarX && policeCarX <= 410) {
      siren.play(); // calls the preloaded sound
      siren.setVolume(0.1); //volume set between 0 and 1
    } else {
     siren.stop();
    }
    
    //police car
    textSize(50)
    frameRate (60)
    text("🚓", policeCarX, 365) 
    policeCarX = 600 - frameCount % (width + 300)
    
    //red car
    textSize (45)
    frameRate (50)
    text("🚗", carX, 395)
    carX = width - frameCount % (width + 75)
    
   
    fill(windowColor);
    

    //CLOUD ONE
    fill(255, 255, 255);
    noStroke();
    ellipse(cloudOne, 100, 100, 40);
    circle(cloudOne - 5, 90, 60);
    cloudOne = (frameCount % (width + 700)) / 2;
    //controls movement of cloud across screen

    //RAIN
    stroke(100, 240, 255);
    strokeWeight(1.5);
    line(rainX, rainY, rainX, rainY + 20);
    rainX = random(cloudTwo - 50, cloudTwo + 50);
    //above portion is so the rain stays w/ its cloud
    rainY = random(150, 400); //rain can't go above cloud

    //CLOUD TWO (bc why not)
    fill(190, 190, 190);
    noStroke();
    ellipse(cloudTwo, 150, 120, 30);
    ellipse(cloudTwo + 5, 150, 80, 50);
    cloudTwo = (frameCount % (width + 1200)) / 3;
    //controls movement of cloud across screen
  }
  if (day == false) {
    //NIGHT SKY
    background("darkblue"); //the night sky is dark blue

    //SHOOTING STARS
    stroke("yellow");
    strokeWeight(1);
    line(starX - 20, starY - 20, starX + 20, starY + 30);
    starX = random(0, width); //x value is random
    starY = random(0, height / 1.5); //y value is random

    //MOON
    fill(255, 255, 255);
    noStroke();
    circle(300, 90, 80);
    //thing that blocks part of moon to show phase changes
    fill("darkblue"); //same color as night sky
    circle(moonSize, 90, realMoonSize);

    buildings();
    //call first building's windows function
    windows(0, 200, 8);
    windows(14, 200, 8);
    windows(28, 200, 8);
    windows(42, 200, 8);
    windows(0, 220, 8);
    windows(14, 220, 8);
    windows(28, 220, 8);
    windows(42, 220, 8);
    windows(0, 240, 8);
    windows(14, 240, 8);
    windows(28, 240, 8);
    windows(42, 240, 8);
    windows(0, 260, 8);
    windows(14, 260, 8);
    windows(28, 260, 8);
    windows(42, 260, 8);
    windows(0, 280, 8);
    windows(0, 300, 8);
    windows(14, 280, 8);
    windows(14, 300, 8);
    windows(28, 280, 8);
    windows(28, 300, 8);
    windows(42, 280, 8);
    windows(42, 300, 8);

    square1X = random(10, 52);
    square1Y = random(230, 330);
    fill("black");
    square(square1X, square1Y, 20);

    //calls second building's windows function
    windows(77, 150, 8);
    windows(77, 170, 8);
    windows(77, 190, 8);
    windows(77, 210, 8);
    windows(77, 230, 8);
    windows(77, 250, 8);
    windows(77, 270, 8);
    windows(77, 290, 8);
    windows(77, 310, 8);
    windows(92, 150, 8);
    windows(92, 170, 8);
    windows(92, 190, 8);
    windows(92, 210, 8);
    windows(92, 230, 8);
    windows(92, 250, 8);
    windows(92, 270, 8);
    windows(92, 290, 8);
    windows(92, 310, 8);
    windows(107, 150, 8);
    windows(107, 170, 8);
    windows(107, 190, 8);
    windows(107, 210, 8);
    windows(107, 230, 8);
    windows(107, 250, 8);
    windows(107, 270, 8);
    windows(107, 290, 8);
    windows(107, 310, 8);
    windows(122, 150, 8);
    windows(122, 170, 8);
    windows(122, 190, 8);
    windows(122, 210, 8);
    windows(122, 230, 8);
    windows(122, 250, 8);
    windows(122, 270, 8);
    windows(122, 290, 8);
    windows(122, 310, 8);

    square2X = random(87, 132);
    square2Y = random(180, 340);
    fill("black");
    square(square2X, square2Y, 20);

    //calls third building's windows function
    windows(157, 180, 8);
    windows(157, 200, 8);
    windows(157, 220, 8);
    windows(157, 240, 8);
    windows(157, 260, 8);
    windows(157, 280, 8);
    windows(157, 300, 8);
    windows(172, 180, 8);
    windows(172, 200, 8);
    windows(172, 220, 8);
    windows(172, 240, 8);
    windows(172, 260, 8);
    windows(172, 280, 8);
    windows(172, 300, 8);
    windows(187, 180, 8);
    windows(187, 200, 8);
    windows(187, 220, 8);
    windows(187, 240, 8);
    windows(187, 260, 8);
    windows(187, 280, 8);
    windows(187, 300, 8);
    windows(202, 180, 8);
    windows(202, 200, 8);
    windows(202, 220, 8);
    windows(202, 240, 8);
    windows(202, 260, 8);
    windows(202, 280, 8);
    windows(202, 300, 8);

    square3X = random(160, 190);
    square3Y = random(210, 330);
    fill("black");
    square(square3X, square3Y, 40);

    //calls fourth building's windows function
    windows(237, 170, 8);
    windows(237, 190, 8);
    windows(237, 210, 8);
    windows(237, 230, 8);
    windows(237, 250, 8);
    windows(237, 270, 8);
    windows(237, 290, 8);
    windows(237, 310, 8);
    windows(252, 170, 8);
    windows(252, 190, 8);
    windows(252, 210, 8);
    windows(252, 230, 8);
    windows(252, 250, 8);
    windows(252, 270, 8);
    windows(252, 290, 8);
    windows(252, 310, 8);
    windows(267, 170, 8);
    windows(267, 190, 8);
    windows(267, 210, 8);
    windows(267, 230, 8);
    windows(267, 250, 8);
    windows(267, 270, 8);
    windows(267, 290, 8);
    windows(267, 310, 8);
    windows(282, 170, 8);
    windows(282, 190, 8);
    windows(282, 210, 8);
    windows(282, 230, 8);
    windows(282, 250, 8);
    windows(282, 270, 8);
    windows(282, 290, 8);
    windows(282, 310, 8);

    square4X = random(240, 280);
    square4Y = random(200, 340);
    fill("black");
    square(square4X, square4Y, 30);

    //calls fifth building's window function
    windows(318, 160, 8);
    windows(318, 180, 8);
    windows(318, 200, 8);
    windows(318, 220, 8);
    windows(318, 240, 8);
    windows(318, 260, 8);
    windows(318, 280, 8);
    windows(318, 300, 8);
    windows(333, 160, 8);
    windows(333, 180, 8);
    windows(333, 200, 8);
    windows(333, 220, 8);
    windows(333, 240, 8);
    windows(333, 260, 8);
    windows(333, 280, 8);
    windows(333, 300, 8);
    windows(348, 160, 8);
    windows(348, 180, 8);
    windows(348, 200, 8);
    windows(348, 220, 8);
    windows(348, 240, 8);
    windows(348, 260, 8);
    windows(348, 280, 8);
    windows(348, 300, 8);
    windows(363, 160, 8);
    windows(363, 180, 8);
    windows(363, 200, 8);
    windows(363, 220, 8);
    windows(363, 240, 8);
    windows(363, 260, 8);
    windows(363, 280, 8);
    windows(363, 300, 8);

    square5X = random(320, 370);
    square5Y = random(185, 335);
    fill("black");
    square(square5X, square5Y, 15);

    //road
    fill("black");
    rect(-10, 350, 500, 500);
  }
}


function buildings(x, y, size) {
  //silhouette of buildings
  fill("black");
  rect(0, 200, 70, 170);
  rect(80, 150, 70, 220);
  rect(90, 130, 50, 50);
  strokeWeight(4);
  line(115, 140, 115, 90);
  rect(160, 200, 70, 170);
  rect(240, 190, 70, 180);
  triangle(310, 160, 310, 190, 240, 190);
  rect(320, 180, 70, 190);
  rect(325, 170, 60, 10);
  triangle(355, 150, 381, 170, 329, 170);
}
//light
function windows(x, y, size) {
  fill(windowColor);
  square(x + 10, y + 30, size - 3);
}
function mousePressed() {
  if (day == true) {
    day = false; //if it's day and mouse is pressed, it's night
    if (moonSize >= 220) {
      moonSize = moonSize - 10; //the moon blocker moves left
      realMoonSize = 70;
    }
    if (moonSize == 220) {
      moonSize = 380; //moon blocker blocks other side of moon
      realMoonSize = 70;
    }
    if (moonSize == 300) {
      realMoonSize = 90; //moon blocker blocks entire moon
    }
    windowColor = "yellow";
    siren.stop();
  } else {
    day = true; //if it's night and mouse is pressed, it's day
    windowColor = "white";
  }
  
  
}
