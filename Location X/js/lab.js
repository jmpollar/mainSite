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
  //draw the image on the canvas using jCanvas at center of page 
  $("#img-canvas").drawImage({
    source: 'img/photo1.png',
    x: 210,
    y: 40,
    scale: 1,
    fromCenter: false
  });
  const area1 = new Area(70, 265, 415, 450);
  const area2 = new Area(40, 770, 390, 940);
  const area3 = new Area(550, 690, 670, 900);
  const area4 = new Area(1280, 340, 1465, 630);
  const area5 = new Area(1125, 750, 1480, 930);

   //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
   $("#img-canvas").drawRect({
    strokeStyle: 'red',
    strokeWidth: 4,
    x: area1.minX, y: area1.minY,
    width: (area1.maxX-area1.minX),
    height: (area1.maxY-area1.minY)
  });
  // the code that makes everything happen
  let canv = $("#img-canvas");

}

// let's get this party started
main();
