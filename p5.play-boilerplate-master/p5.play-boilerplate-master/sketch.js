var fixedRect, movingRect;

function setup() {
    createCanvas(800, 800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "pink";

    movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "skyblue";


}

function draw() {
    background("yellow");

    movingRect.x = mouseX;
    movingRect.y = mouseY;

    if (fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2) {
        fixedRect.shapeColor = "black";
        movingRect.shapeColor = "black";
    } else {
        fixedRect.shapeColor = "pink";
        movingRect.shapeColor = "skyblue";
    }

    drawSprites();
}