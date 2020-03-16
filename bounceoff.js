//make the variables for objects
var movingrect, fixedrect;

function setup() 
{

    //create the canvas
    createCanvas(1200, 800);

    //create the first object
    fixedrect = createSprite(400, 100, 50, 80);

    //create the second object
    movingrect = createSprite(400, 800, 80, 30);


  //add colour to the first object
    movingrect.shapeColor = "green";

    //add colour to the second object
    fixedrect.shapeColor ="green";

  //give velocity to the first object
  movingrect.velocityY = -5;

  //give velocity to the second object
  fixedrect.velocityY = +5;
}

function draw() 
{

    //clear the background
    background(0);

  //call the function
    bounceoff(movingrect,fixedrect);

    //create draw sprites
    drawSprites();
}

