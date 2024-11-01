let day = true; //makes it daytime when code runs
let starX = 0; //initial x value of shooting star
let starY = 0; //initial y value of shooting star
let moonSize = 290; //initial x position of moon blocker
let realMoonSize = 70; //initial size of moon blocker
let innerCircle = 55; //initial size of inner sun part
let expand = false; //inner sun part not initially expanding
let expandAmt = 0.10; //amt by which inner sun part expands
let cloudOne = 0; //initial x value of cloud one
let cloudTwo = 0; //initial x value of cloud two
let rainX = 0; //initial x value of rain
let rainY = 0; //initial y value of rain

function setup() {
  createCanvas(400, 400); //creates a 400x400 canvas
}

function draw() { 
  
  
  if (day == true) {
    
    //DAY SKY
    if (250<=cloudOne && cloudOne<=350){
    background(210,210,255)
    } else {
    background(230,240,255); 
    }
    //the daytime sky is light blue (darker if cloud blocks sun)
    
    //SUN
    fill("orange")
    strokeWeight(0)
    circle(300,90,80);//circle location and size
    fill(255,200,10);//circle color (light orange)
    circle(300, 90, innerCircle)
    if (innerCircle > 70) {
        expand = false
    }
    
    if (innerCircle < 55) {
      expand = true
    }
    if (expand == true) {
      innerCircle += expandAmt 
      //if inner circle < size 55, circle expands by 0.1 each time       the draw function is called
    } else {
      innerCircle -= expandAmt
      //if inner circle > size 70, circle shrinks by 0.1 each time       the draw function is called
    }
    
    //CLOUD ONE
    fill(255,255,255);
    noStroke();
    ellipse(cloudOne,100,100,40);
    circle(cloudOne-5, 90, 60);
    cloudOne = (frameCount % (width+700))/2;
    //controls movement of cloud across screen
      
    //RAIN
    stroke(200,200,255);
    strokeWeight(1.5);
    line(rainX, rainY, rainX, rainY+20);
    rainX = random(cloudTwo-50, cloudTwo+50);
    //above portion is so the rain stays w/ its cloud
    rainY = random(150, 400); //rain can't go above cloud
    
    //CLOUD TWO (bc why not)
    fill(190,190,190);
    noStroke();
    ellipse(cloudTwo,150,120,30);
    ellipse(cloudTwo+5, 150, 80,50)
    cloudTwo = (frameCount % (width+1200))/3
    //controls movement of cloud across screen

  }
  
  
  
  if (day == false) {
    
    //NIGHT SKY
    background("darkblue"); //the night sky is dark blue
   
    //SHOOTING STARS
    stroke("yellow");
    strokeWeight(1);
    line(starX-20, starY-20, starX+20, starY+30);
    starX = random(0, width); //x value is random
    starY = random(0, height/1.5); //y value is random
    
    //MOON
    fill(255,255,255);
    noStroke();
    circle(300,90,80);
    
    //thing that blocks part of moon to show phase changes
    fill("darkblue"); //same color as night sky
    circle(moonSize,90,realMoonSize);
  }
}
function mousePressed () {
  if (day == true){
    day = false; //if it's day and mouse is pressed, it's night
    if (moonSize>=220) {
    moonSize = moonSize-10; //the moon blocker moves left
      realMoonSize = 70;
    }
    if (moonSize==220){
      moonSize = 380; //moon blocker blocks other side of moon
      realMoonSize = 70;
    }
    if(moonSize==300){
      realMoonSize = 90; //moon blocker blocks entire moon
    }
  } else {
    day = true; //if it's night and mouse is pressed, it's day
  }
}