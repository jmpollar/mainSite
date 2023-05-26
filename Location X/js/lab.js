// index.js - purpose and description here
// Author: Your Name
// Date:
// Constants
//declare the areas as class instances\
//taking parameters of max/min x/y as bounds
class Area {
  constructor(minX, minY, maxX, maxY) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
}
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  var coords;
  var currentQuadrant;
  var photo1Width = 1500;
  var photo1Height = 1000;
  var gameOver = false;
  var timeElapsed = 0.0;
  var slugWidth = 1170 / 2;
  var slugHeight = 1097 / 2;
  var numberOfAreas = 5;
  var xOffset = 210;
  var yOffset = 40;
  const area1 = new Area(70 + xOffset, 265 + yOffset, 415 + xOffset, 450 + yOffset);
  const area2 = new Area(40 + xOffset, 770 + yOffset, 390 + xOffset, 940 + yOffset);
  const area3 = new Area(550 + xOffset, 690 + yOffset, 670 + xOffset, 900 + yOffset);
  const area4 = new Area(1280 + xOffset, 340 + yOffset, 1465 + xOffset, 630 + yOffset);
  const area5 = new Area(1125 + xOffset, 750 + yOffset, 1480 + xOffset, 930 + yOffset);

  //declare quadrants
  const quad1 = new Area(xOffset, yOffset, xOffset + (photo1Width / 2), yOffset + (photo1Height / 2));
  const quad2 = new Area(xOffset + (photo1Width / 2), yOffset, xOffset + (photo1Width), yOffset + (photo1Height / 2));
  const quad3 = new Area(xOffset, yOffset + (photo1Height / 2), xOffset + (photo1Width / 2), yOffset + (photo1Height));
  const quad4 = new Area(xOffset + (photo1Width / 2), yOffset + (photo1Height / 2), xOffset + (photo1Width), yOffset + (photo1Height));
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //define function that randomly selects an area and selects coordinates based off that
  function chooseCoordinates() {
    var randAreaNum = Math.floor(Math.random() * numberOfAreas) + 1;
    var randArea;
    //assign the area based on that
    switch (randAreaNum) {
      case 1:
        randArea = area1;
        break;
      case 2:
        randArea = area2;
        break;
      case 3:
        randArea = area3;
        break;
      case 4:
        randArea = area4;
        break;
      case 5:
        randArea = area5;
        break;
      default:
        randArea = area1;
        console.log("OOPSIES");
        break;
    }

    //now choose random coordinates for the slug based on the minimum and maximum coordinates of the area selected
    var randCoordX, randCoordY;

    randCoordX = getRandomInteger(randArea.minX, randArea.maxX);
    randCoordY = getRandomInteger(randArea.minY, randArea.maxY);

    return [randArea, randAreaNum, randCoordX, randCoordY];
  }

  function drawSluggy() {
    //get random coordinates from the function
    coords = chooseCoordinates();
    console.log(coords); //functional
    console.log(coords[2] + coords[3]);

    //draw the slug on the slug canvas layer at this coordinate location
    $("#slug-canvas").drawImage({
      name: "slugImg",
      source: 'img/slug1.jpg',
      x: coords[2] - (slugWidth),
      y: coords[3] - (slugHeight),
      scale: .1,
      fromCenter: false
    });
  }

  function drawBoxes() {
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    $("#box-canvas").drawRect({
      name: "box1",
      layer: true,
      strokeStyle: 'red',
      strokeWidth: 4,
      x: area1.minX, y: area1.minY,
      width: (area1.maxX - area1.minX),
      height: (area1.maxY - area1.minY),
      fromCenter: false
    });
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    $("#box-canvas").drawRect({
      name: "box2",
      layer: true,
      strokeStyle: 'red',
      strokeWidth: 4,
      x: area2.minX, y: area2.minY,
      width: (area2.maxX - area2.minX),
      height: (area2.maxY - area2.minY),
      fromCenter: false,
    });
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    $("#box-canvas").drawRect({
      name: "box3",
      layer: true,
      strokeStyle: 'red',
      strokeWidth: 4,
      x: area3.minX, y: area3.minY,
      width: (area3.maxX - area3.minX),
      height: (area3.maxY - area3.minY),
      fromCenter: false
    });
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    $("#box-canvas").drawRect({
      name: "box4",
      layer: true,
      strokeStyle: 'red',
      strokeWidth: 4,
      x: area4.minX, y: area4.minY,
      width: (area4.maxX - area4.minX),
      height: (area4.maxY - area4.minY),
      fromCenter: false
    });
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    $("#box-canvas").drawRect({
      name: "box5",
      layer: true,
      strokeStyle: 'red',
      strokeWidth: 4,
      x: area5.minX, y: area5.minY,
      width: (area5.maxX - area5.minX),
      height: (area5.maxY - area5.minY),
      fromCenter: false
    });

  }

  function drawQuadrant(quad) {
    //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
    switch (quad) {
      case 0:
        $("#box-canvas").drawRect({
          name: "box6",
          layer: true,
          strokeStyle: 'red',
          strokeWidth: 4,
          x: quad1.minX, y: quad1.minY,
          width: (quad1.maxX - quad1.minX),
          height: (quad1.maxY - quad1.minY),
          fromCenter: false
        });
        break;
      case 1:
        $("#box-canvas").drawRect({
          name: "box7",
          layer: true,
          strokeStyle: 'red',
          strokeWidth: 4,
          x: quad2.minX, y: quad2.minY,
          width: (quad2.maxX - quad2.minX),
          height: (quad2.maxY - quad2.minY),
          fromCenter: false
        });
        break;
      case 2:
        $("#box-canvas").drawRect({
          name: "box8",
          layer: true,
          strokeStyle: 'red',
          strokeWidth: 4,
          x: quad3.minX, y: quad3.minY,
          width: (quad3.maxX - quad3.minX),
          height: (quad3.maxY - quad3.minY),
          fromCenter: false
        });
        break;
      case 3:
        $("#box-canvas").drawRect({
          name: "box9",
          layer: true,
          strokeStyle: 'red',
          strokeWidth: 4,
          x: quad4.minX, y: quad4.minY,
          width: (quad4.maxX - quad4.minX),
          height: (quad4.maxY - quad4.minY),
          fromCenter: false
        });
        break;
    }
  }

  //draw the image on the canvas using jCanvas at center of page 
  $("#img-canvas").drawImage({
    name: "img1",
    source: 'img/photo1.png',
    x: xOffset,
    y: yOffset,
    scale: 1,
    fromCenter: false,
    load: drawBoxes
  });

  //call drawSluggy now for testing but this will be called with an html listener of sorts later
  drawSluggy();

  //find out what quadrant the slug is in
  if (coords[2] >= xOffset && coords[3] >= yOffset && coords[2] <= xOffset + (photo1Width / 2) && coords[3] <= yOffset + (photo1Height / 2)) {
    currentQuadrant = 0;
  }
  else if (coords[2] >= xOffset + (photo1Width / 2) && coords[3] >= yOffset && coords[2] <= xOffset + (photo1Width) && coords[3] >= yOffset + (photo1Height / 2)) {
    currentQuadrant = 1;
  }
  else if (coords[2] >= xOffset && coords[3] >= yOffset + (photo1Height / 2) && coords[2] <= xOffset + (photo1Width / 2) && coords[3] <= yOffset + (photo1Height)) {
    currentQuadrant = 2;
  }
  else if (coords[2] >= xOffset + (photo1Width / 2) && coords[3] >= yOffset + (photo1Height / 2) && coords[2] <= xOffset + (photo1Width) && coords[3] <= yOffset + (photo1Height)) {
    currentQuadrant = 3;
  }
  else {
    console.log("You screwed up your quads!");
  }

  //function to increment time elapsed
  var startTime = Date.now();

  //after 30 seconds, highlight the quadrant the slug is in
  const showQuadTimeout = setTimeout(drawQuadrant, 30000, currentQuadrant);
  

  function getTimeElapsed() {
    return (Date.now() - startTime);
  }

  //assign the return value of getTimeElapsed to timeElapsed on canvas.onHover
  $("#slug-canvas").hover(function () {
    timeElapsed = Number(getTimeElapsed());
    console.log(timeElapsed);
    //change the time paragraph's innerHTML to timeElapsed
    $("#time-p").html("TIME ELAPSED: " + (timeElapsed / 1000) + " SECONDS");
  });
  $("#box-canvas").hover(function () {
    timeElapsed = Number(getTimeElapsed());
    console.log(timeElapsed);
    //change the time paragraph's innerHTML to timeElapsed
    $("#time-p").html("TIME ELAPSED: " + (timeElapsed / 1000) + " SECONDS");
  });
  $("#img-canvas").hover(function () {
    timeElapsed = Number(getTimeElapsed());
    console.log(timeElapsed);
    //change the time paragraph's innerHTML to timeElapsed
    $("#time-p").html("TIME ELAPSED: " + (timeElapsed / 1000) + " SECONDS");
  });




}




// let's get this party started
main();
