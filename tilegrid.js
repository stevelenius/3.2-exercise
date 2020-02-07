function setup() {
  createCanvas(600, 600);
  background("#FFF")
  noLoop();
}
 
function createMarilynTile(originX, originY, squareColor, hairColor, skinColor, shadowColor, lipColor, teethColor, dressColor) {
    translate(originX, originY);

    //tile background
    stroke(0, 0, 0);
    strokeWeight(0);
    fill(squareColor);
    rect(0, 0, 200, 200);

    //dress
    fill(dressColor);
    triangle(138, 158, 138, 199, 181, 199);

    //neck
    strokeWeight(4);
    fill(skinColor);
    rect(60, 158, 79, 43);

    //head
    strokeWeight(6);
    ellipse(92, 107, 129, 171);

    //left eye
    strokeWeight(12);
    point(66, 101);

    //right eye
    point(114, 101);

    //left eye shadow
    strokeWeight(12);
    stroke(shadowColor);
    noFill();
    arc(65, 108, 35, 48, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

    //right eye shadow
    arc(115, 108, 35, 48, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

    //left brow
    stroke(0, 0, 0);
    strokeWeight(1);
    line(46, 92, 54, 80);
    line(54, 80, 70, 86);

    //right brow
    line(100, 83, 121, 80);
    line(121, 80, 135, 93);

    //nose
    line(69, 129, 78, 108);
    line(91, 113, 98, 130);
    fill(0, 0, 0);
    ellipse(83, 130, 30, 8);

    //beauty mark
    strokeWeight(4);
    point(112,137);

    //lips
    fill(lipColor);
    strokeWeight(0);
    ellipse(84, 151, 43, 22);

    //teeth
    fill(teethColor);
    ellipse(84, 151, 21, 8);

    //hair
    fill(hairColor);
    strokeWeight(1);
    ellipse(34, 163, 16, 45);
    ellipse(144, 163, 16, 45);
    ellipse(24, 126, 28, 52);
    ellipse(149, 126, 32, 52);
    ellipse(30, 85, 28, 52);
    ellipse(157, 88, 28, 52);
    ellipse(63, 49, 79, 46);
    ellipse(90, 40, 79, 52);
    ellipse(135, 49, 50, 56);
  }
 
function draw() {
    createMarilynTile(0, 0, '#5F8BCA', '#F3CE73', '#F3B2C6', '#80BBC6', '#C80C4B', '#FFF', '#7DB5C2');
    createMarilynTile(0, 200, '#E3597A', '#965A50', '#C99446', '#ED658D', '#000', '#ED658D', '#FE5EA8');
    createMarilynTile(0, 200, '#75ABAD', '#E59117', '#D181BC', '#90C2D0', '#000', '#AE1108', '#AE1108');
    createMarilynTile(200, -400, '#A52071', '#F4CA20', '#ECB396', '#AC3876', '#000', '#AC3876', '#C52071');
    createMarilynTile(0, 200, '#D87184', '#FFF', '#FFF', '#AC354B', '#000', '#AE4695', '#AB2885');
    createMarilynTile(0, 200, '#4BC8BA', '#FEE741', '#FEB7BF', '#BEDBE3', '#9F261D', '#FFF', '#289A92');
    createMarilynTile(200, -400, '#CD233E', '#DA9937', '#DD7B70', '#DC2949', '#000', '#BC2A3D', '#B7283C');
    createMarilynTile(0, 200, '#EB038B', '#EFE70A', '#E3A2A6', '#EA0D7A', '#000', '#DF2F7A', '#E24D81');
    createMarilynTile(0, 200, '#376AA3', '#DDC849', '#EBA59B', '#5178A4', '#6B2116', '#FFF', '#479B9D');
}

console.log('Inspired by Andy Warhol\'s series of Marilyn Monroe portraits');

 