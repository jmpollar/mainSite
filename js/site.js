// index.js - purpose and description here
// Author: Your Name
// Date:
//global var imageEl
var imageEl;

// When a tab is clicked
$('.tab').click(function () {
  // Get the value of the data-tab attribute of the clicked tab
  var tabId = $(this).data('tab');

  // Remove the 'active' class from all tabs
  $('.tab').removeClass('active');
  // Add the 'active' class to the clicked tab
  $(this).toggleClass('active');
  // Hide all tab panes
  $('.tab-pane').removeClass('active');
  // Show the tab pane corresponding to the clicked tab
  $('[data-tab-content="' + tabId + '"]').toggleClass('active');

  // specific location tabs
  if (tabId === 'tab3') {
    $(".nav-bar").hide();
    $('body').css('background-image', "url('img/photo1.png')");

    //////////////// turn this into a function ////////////////////////
    // Define image URL and coords
    var imageUrl = "img/slug1.jpg";
    //var imageX = 300;
    //var imageY = 300;
    // Create image element
    imageEl = $('<img>');
    imageEl.attr('src', imageUrl);
    imageEl.attr('id', "slug1");
    drawSluggy();

    ///////////////////////////////////////

  }
})

// Imported from Location X JS 
//create a clock to track time
class Area {
  constructor(minX, minY, maxX, maxY) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
}
var startTime = Date.now();
var timeElapsed = Date.now();
var rect1, rect2, rect3, rect4, rect5;
var quaddie1, quaddie2, quaddie3, quaddie4;
var imgCanvas = $("#img-canvas");
var coords;
var currentQuadrant;
var photo1Width = 1500;
var photo1Height = 1000;
var gameOver = false;
var timeElapsed = 0.0;
var slugWidth = 1170.0;
var slugHeight = 1097.0;
var numberOfAreas = 5;
var xOffset = 210;
var yOffset = 300;
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

  // Set position using CSS
  imageEl.css({
    'position': 'absolute',
    'left': (Number(coords[2]) - Number(slugWidth / 2)).toString() + 'px',
    'top': (Number(coords[3]) - Number(slugHeight / 2)).toString() + 'px'
  });
  // Append to the container
  var imageBody = $('#img-body');
  imageBody.append(imageEl);
  console.log("placed");
  // Add an event listener for click
  imageEl.on('click', function () {
    $("#location1").append("<p>Fun Fact??? <br> or make a pop up or have this here but just styled better</p>");
    // maybe have a button to move to the next location 
    // (it can be like the start button where that is what makes it go to the next tab)
  });
}
/*
function drawBoxes() {
  //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
  var ctx = imgCanvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = "4";
  rect1 = ctx.rect(area1.minX, area1.minY, (area1.maxX - area1.minX), (area1.maxY - area1.minY));
  ctx.stroke();

  rect2 = ctx.rect(area2.minX, area2.minY, (area2.maxX - area2.minX), (area2.maxY - area2.minY));
  ctx.stroke();

  rect3 = ctx.rect(area3.minX, area3.minY, (area3.maxX - area3.minX), (area3.maxY - area3.minY));
  ctx.stroke();


  rect4 = ctx.rect(area4.minX, area4.minY, (area4.maxX - area4.minX), (area4.maxY - area4.minY));
  ctx.stroke();


  rect5 = ctx.rect(area5.minX, area5.minY, (area5.maxX - area5.minX), (area5.maxY - area5.minY));
  ctx.stroke();
}


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

function drawQuadrant(quad) {
  //draw the rectangles to ensure areas are consistent WILL REMOVE LATER
  switch (quad) {
    case 0:
      var ctx = imgCanvas.getContext("2d");
      ctx.beginPath();
      quaddie1 = ctx.rect(quad1.minX, quad1.minY, (quad1.maxX - quad1.minX), (quad1.maxY - quad1.minY));
      ctx.stroke();
      break;
    case 1:
      var ctx = imgCanvas.getContext("2d");
      ctx.beginPath();
      quaddie2 = ctx.rect(quad2.minX, quad2.minY, (quad2.maxX - quad2.minX), (quad2.maxY - quad2.minY));
      ctx.stroke();
      break;
    case 2:
      var ctx = imgCanvas.getContext("2d");
      ctx.beginPath();
      quaddie3 = ctx.rect(quad3.minX, quad3.minY, (quad3.maxX - quad3.minX), (quad3.maxY - quad3.minY));
      ctx.stroke();
      break;
    case 3:
      var ctx = imgCanvas.getContext("2d");
      ctx.beginPath();
      quaddie4 = ctx.rect(quad4.minX, quad4.minY, (quad4.maxX - quad4.minX), (quad4.maxY - quad4.minY));
      ctx.stroke();
      break;
  }
}

// When a tab is clicked
$('.tab').click(function () {
  // Get the value of the data-tab attribute of the clicked tab
  var tabId = $(this).data('tab');

  // Remove the 'active' class from all tabs
  $('.tab').removeClass('active');
  // Add the 'active' class to the clicked tab
  $(this).toggleClass('active');
  // Hide all tab panes
  $('.tab-pane').removeClass('active');
  // Show the tab pane corresponding to the clicked tab
  $('[data-tab-content="' + tabId + '"]').toggleClass('active');

  // specific location tabs
  if (tabId === 'tab3') {
    $(".nav-bar").hide();
    $('body').css('background-image', "url('img/photo1.png')");
  }

  //set gameStarted to true
  gameStarted = true;

  console.log("GAME STARTED: " + gameStarted);
});

$("#hideSimpleBtn").click(function () {
  $("#simpleDiv").hide();
});

$("#showSimpleBtn").click(function () {
  $("#simpleDiv").show();
});
var gameStarted = false;
var startTime;
//when start button clicked
$("#start").click(function () {
  //after 30 seconds, highlight the quadrant the slug is in
  const showQuadTimeout = setTimeout(drawQuadrant, 120000, currentQuadrant);

});

//KIND OF works, but changing the window size changes click position which is an issue, if only we could make the image an el at a specific spot.
$("#img-canvas").click(function (clickPos) {
  console.log(clickPos.clientX + " " + clickPos.clientY);
  //when the slug is clicked, event listener
  if (gameStarted === true && (clickPos.clientX <= coords[2] + 100 && clickPos.clientX >= coords[2] - 100) && (clickPos.clientY <= coords[3] + 100 && clickPos.clientY >= coords[3] - 100)) {
    console.log("HIT");
    var ctx = imgCanvas.getContext("2d");
    //hide the slug
    ctx.clearRect(0, 0, $("#img-canvas").width, $("#img-canvas").height);
  }

})


$("#hideSimpleBtn").click(function () {
  $("#simpleDiv").hide();
});

$("#showSimpleBtn").click(function () {
  $("#simpleDiv").show();
});
var gameStarted = false;
var startTime;
//when start button clicked
$("#start").click(function () {
  //after 120 seconds, highlight the quadrant the slug is in
  const showQuadTimeout = setTimeout(drawQuadrant, 120000, currentQuadrant);

});*/
