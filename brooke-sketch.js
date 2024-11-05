function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //call building function
  buildings();
  
  //call first building's windows function
  windows(0, 200, 10)
  windows(14, 200, 10)
  windows(28, 200, 10)
  windows(42, 200, 10)
  windows(0, 220, 10)
  windows(14, 220, 10)
  windows(28, 220, 10)
  windows(42, 220, 10)
  windows(0, 240, 10)
  windows(14, 240, 10)
  windows(28, 240, 10)
  windows(42, 240, 10)
  windows(0, 260, 10)
  windows(14, 260, 10)
  windows(28, 260, 10)
  windows(42, 260, 10)
  windows(0, 280, 10)
  windows(0, 300, 10)
  windows(14, 280, 10)
  windows(14, 300, 10)
  windows(28, 280, 10)
  windows(28, 300, 10)
  windows(42, 280, 10)
  windows(42, 300, 10)
  
  //calls second building's windows function
  windows (77, 150, 10)
  windows (77, 170, 10)
  windows (77, 190, 10)
  windows (77, 210, 10)
  windows (77, 230, 10)
  windows (77, 250, 10)
  windows (77, 270, 10)
  windows (77, 290, 10)
  windows (77, 310, 10)
  windows (92, 150, 10)
  windows (92, 170, 10)
  windows (92, 190, 10)
  windows (92, 210, 10)
  windows (92, 230, 10)
  windows (92, 250, 10)
  windows (92, 270, 10)
  windows (92, 290, 10)
  windows (92, 310, 10)
  windows (107, 150, 10)
  windows (107, 170, 10)
  windows (107, 190, 10)
  windows (107, 210, 10)
  windows (107, 230, 10)
  windows (107, 250, 10)
  windows (107, 270, 10)
  windows (107, 290, 10)
  windows (107, 310, 10)
  windows (122, 150, 10)
  windows (122, 170, 10)
  windows (122, 190, 10)
  windows (122, 210, 10)
  windows (122, 230, 10)
  windows (122, 250, 10)
  windows (122, 270, 10)
  windows (122, 290, 10)
  windows (122, 310, 10)
  
  //calls third building's windows function
  windows(157, 180, 10)
  windows(157, 200, 10)
  windows(157, 220, 10)
  windows(157, 240, 10)
  windows(157, 260, 10)
  windows(157, 280, 10)
  windows(157, 300, 10)
  windows(172, 180, 10)
  windows(172, 200, 10)
  windows(172, 220, 10)
  windows(172, 240, 10)
  windows(172, 260, 10)
  windows(172, 280, 10)
  windows(172, 300, 10)
  windows(187, 180, 10)
  windows(187, 200, 10)
  windows(187, 220, 10)
  windows(187, 240, 10)
  windows(187, 260, 10)
  windows(187, 280, 10)
  windows(187, 300, 10)
  windows(202, 180, 10)
  windows(202, 200, 10)
  windows(202, 220, 10)
  windows(202, 240, 10)
  windows(202, 260, 10)
  windows(202, 280, 10)
  windows(202, 300, 10)
 
  //calls fourth building's windows function
  windows(237, 170, 10)
  windows(237, 190, 10)
  windows(237, 210, 10)
  windows(237, 230, 10)
  windows(237, 250, 10)
  windows(237, 270, 10)
  windows(237, 290, 10)
  windows(237, 310, 10)
  windows(252, 170, 10)
  windows(252, 190, 10)
  windows(252, 210, 10)
  windows(252, 230, 10)
  windows(252, 250, 10)
  windows(252, 270, 10)
  windows(252, 290, 10)
  windows(252, 310, 10)
  windows(267, 170, 10)
  windows(267, 190, 10)
  windows(267, 210, 10)
  windows(267, 230, 10)
  windows(267, 250, 10)
  windows(267, 270, 10)
  windows(267, 290, 10)
  windows(267, 310, 10)
  windows(282, 170, 10)
  windows(282, 190, 10)
  windows(282, 210, 10)
  windows(282, 230, 10)
  windows(282, 250, 10)
  windows(282, 270, 10)
  windows(282, 290, 10)
  windows(282, 310, 10)

  //calls fifth building's window function
  windows(318, 160, 10)
  windows(318, 180, 10)
  windows(318, 200, 10)
  windows(318, 220, 10)
  windows(318, 240, 10)
  windows(318, 260, 10)
  windows(318, 280, 10)
  windows(318, 300, 10)
  windows(333, 160, 10)
  windows(333, 180, 10)
  windows(333, 200, 10)
  windows(333, 220, 10)
  windows(333, 240, 10)
  windows(333, 260, 10)
  windows(333, 280, 10)
  windows(333, 300, 10)
  windows(348, 160, 10)
  windows(348, 180, 10)
  windows(348, 200, 10)
  windows(348, 220, 10)
  windows(348, 240, 10)
  windows(348, 260, 10)
  windows(348, 280, 10)
  windows(348, 300, 10)
  windows(363, 160, 10)
  windows(363, 180, 10)
  windows(363, 200, 10)
  windows(363, 220, 10)
  windows(363, 240, 10)
  windows(363, 260, 10)
  windows(363, 280, 10)
  windows(363, 300, 10)

  //road
  fill("black")
  rect(-10, 350, 500, 500)
  
  //sidewalk
  fill(128,126,120)
  strokeColor(128,126,120)
  rect(-10, 340, 500, 8 )
  
  



 


  
  



  


  
  // places the x and y position of the mouse on the canvas
  fill(0)
  textSize (0)
  text(`${mouseX}, ${mouseY}`, 20, 20);
  
}


//building
function buildings(x,y,size) {
  //silhouette of buildings
  fill ("black")
  rect(0, 190, 70, 150)
  rect(80, 140, 70, 200)
  rect(90, 120, 50, 50 )
  strokeWeight(4)
  line (115,140, 115, 90)
  rect(160, 170, 70, 170)
  rect(240, 160, 70, 180)
  triangle(310, 120, 310, 156, 245, 156)
  rect(320, 150, 70, 190)
  rect(325, 145, 60, 10)
  triangle(355, 120, 381, 141, 329, 141)
}

//light
function windows(x, y, size) {
  fill ("white")
  square(x+size, y+40, size)
}



