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
    var coords = chooseCoordinates();
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

}




// let's get this party started
main();
