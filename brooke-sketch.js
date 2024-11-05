function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
//call building function
  buildings();
  
  //call first building's windows function
  windows(0, 200, 8)
  windows(14, 200, 8)
  windows(28, 200, 8)
  windows(42, 200, 8)
  windows(0, 220, 8)
  windows(14, 220, 8)
  windows(28, 220, 8)
  windows(42, 220, 8)
  windows(0, 240, 8)
  windows(14, 240, 8)
  windows(28, 240, 8)
  windows(42, 240, 8)
  windows(0, 260, 8)
  windows(14, 260, 8)
  windows(28, 260, 8)
  windows(42, 260, 8)
  windows(0, 280, 8)
  windows(0, 300, 8)
  windows(14, 280, 8)
  windows(14, 300, 8)
  windows(28, 280, 8)
  windows(28, 300, 8)
  windows(42, 280, 8)
  windows(42, 300, 8)
  
  //calls second building's windows function
  windows (77, 150, 8)
  windows (77, 170, 8)
  windows (77, 190, 8)
  windows (77, 210, 8)
  windows (77, 230, 8)
  windows (77, 250, 8)
  windows (77, 270, 8)
  windows (77, 290, 8)
  windows (77, 310, 8)
  windows (92, 150, 8)
  windows (92, 170, 8)
  windows (92, 190, 8)
  windows (92, 210, 8)
  windows (92, 230, 8)
  windows (92, 250, 8)
  windows (92, 270, 8)
  windows (92, 290, 8)
  windows (92, 310, 8)
  windows (107, 150, 8)
  windows (107, 170, 8)
  windows (107, 190, 8)
  windows (107, 210, 8)
  windows (107, 230, 8)
  windows (107, 250, 8)
  windows (107, 270, 8)
  windows (107, 290, 8)
  windows (107, 310, 8)
  windows (122, 150, 8)
  windows (122, 170, 8)
  windows (122, 190, 8)
  windows (122, 210, 8)
  windows (122, 230, 8)
  windows (122, 250, 8)
  windows (122, 270, 8)
  windows (122, 290, 8)
  windows (122, 310, 8)
  
  //calls third building's windows function
  windows(157, 180, 8)
  windows(157, 200, 8)
  windows(157, 220, 8)
  windows(157, 240, 8)
  windows(157, 260, 8)
  windows(157, 280, 8)
  windows(157, 300, 8)
  windows(172, 180, 8)
  windows(172, 200, 8)
  windows(172, 220, 8)
  windows(172, 240, 8)
  windows(172, 260, 8)
  windows(172, 280, 8)
  windows(172, 300, 8)
  windows(187, 180, 8)
  windows(187, 200, 8)
  windows(187, 220, 8)
  windows(187, 240, 8)
  windows(187, 260, 8)
  windows(187, 280, 8)
  windows(187, 300, 8)
  windows(202, 180, 8)
  windows(202, 200, 8)
  windows(202, 220, 8)
  windows(202, 240, 8)
  windows(202, 260, 8)
  windows(202, 280, 8)
  windows(202, 300, 8)
 
  //calls fourth building's windows function
  windows(237, 170, 8)
  windows(237, 190, 8)
  windows(237, 210, 8)
  windows(237, 230, 8)
  windows(237, 250, 8)
  windows(237, 270, 8)
  windows(237, 290, 8)
  windows(237, 310, 8)
  windows(252, 170, 8)
  windows(252, 190, 8)
  windows(252, 210, 8)
  windows(252, 230, 8)
  windows(252, 250, 8)
  windows(252, 270, 8)
  windows(252, 290, 8)
  windows(252, 310, 8)
  windows(267, 170, 8)
  windows(267, 190, 8)
  windows(267, 210, 8)
  windows(267, 230, 8)
  windows(267, 250, 8)
  windows(267, 270, 8)
  windows(267, 290, 8)
  windows(267, 310, 8)
  windows(282, 170, 8)
  windows(282, 190, 8)
  windows(282, 210, 8)
  windows(282, 230, 8)
  windows(282, 250, 8)
  windows(282, 270, 8)
  windows(282, 290, 8)
  windows(282, 310, 8)

  //calls fifth building's window function
  windows(318, 160, 8)
  windows(318, 180, 8)
  windows(318, 200, 8)
  windows(318, 220, 8)
  windows(318, 240, 8)
  windows(318, 260, 8)
  windows(318, 280, 8)
  windows(318, 300, 8)
  windows(333, 160, 8)
  windows(333, 180, 8)
  windows(333, 200, 8)
  windows(333, 220, 8)
  windows(333, 240, 8)
  windows(333, 260, 8)
  windows(333, 280, 8)
  windows(333, 300, 8)
  windows(348, 160, 8)
  windows(348, 180, 8)
  windows(348, 200, 8)
  windows(348, 220, 8)
  windows(348, 240, 8)
  windows(348, 260, 8)
  windows(348, 280, 8)
  windows(348, 300, 8)
  windows(363, 160, 8)
  windows(363, 180, 8)
  windows(363, 200, 8)
  windows(363, 220, 8)
  windows(363, 240, 8)
  windows(363, 260, 8)
  windows(363, 280, 8)
  windows(363, 300, 8)

  //road
  fill("black")
  rect(-10, 350, 500, 500)
  
  //sidewalk
  fill(128,126,120)
  strokeColor(128,126,120)
  rect(-10, 340, 500, 8 )
  
  
}
  



 


  
  



  


  
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



