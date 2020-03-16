//create the objects
var movingrect, fixedrect;

function setup() 
{

    //create the canvas
    createCanvas(800, 400);

    //create the first object
    fixedrect = createSprite(200, 200, 50, 80);

    //create the second object
    movingrect = createSprite(400, 200, 80, 30);


  //add shapecolour to the objects
    movingrect.shapeColor = "green";
    fixedrect.shapeColor ="green";

}

function draw() 
{

    //clear the background
    background(0);

    //move the objects with the mouse in y position
    movingrect.x = mouseX;
    movingrect.y = mouseY;

  //write the condition for changing the colour of the objects when they touch each other
    if(istouching(fixedrect,movingrect))
    {
      movingrect.shapeColor = "red";
      fixedrect.shapeColor ="red";
    }

    else
    {
      movingrect.shapeColor = "green";
      fixedrect.shapeColor ="green";
    }
    
    //create draw sprites
    drawSprites();
}

