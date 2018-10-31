var scene1, scene2, scene3, scene4, scene5, scene6;
var sceneChange;
var randomObject;
var totalCarbon;
var itemcount;
var backImg;
var shootB, shareB, logB, backB, rewardsB;
var shareB1, shareB2, shareB3;
var log1, log2, log3, log4, log5;
var item1, item2, item3, item4, item5;
var bottle;
var bottle2;
var frame;
var updateLog;
var map;

function preload() {
  backImg = loadImage("icons-01.png");
  shootB = loadImage("icons-02.png");
  shareB = loadImage("icons-03.png");
  backB = loadImage("icons-04.png");
  rewardsB = loadImage("icons-05.png");
  logB = loadImage("icons-06.png");
  shareB1 = loadImage("icons-07.png");
  shareB2 = loadImage("icons-08.png");
  shareB3 = loadImage("icons-09.png");
  bottle = loadImage("icons-10.png");
  bottle2 = loadImage("icons-11.png");
  map = loadImage("icons-12.png");
}

function setup() {
  noStroke();
  createCanvas(600, 800);
  itemcount = 0;
  updateLog = false;
  totalCarbon = 0;
  randomizeObject();
  sceneChange = false;
  scene1 = true;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  item1 = "Water bottle";
  item2 = "Soda can";
  item3 = "Food can";
  item4 = "Cardboard box";
  item5 = "Batteries";
}

function draw() {

  if (!mouseIsPressed) {
    sceneChange = false;
  }
  if (scene1) {
    //background(0, 150, 0);
    image(backImg, 0, 0);

    //scan button
    image(shootB, 150, 300);
    //ellipse(300, 450, 300, 300);
    //middle button
    image(logB, 225, 50);
    //  ellipse(300, 125, 150, 150);
    //right button
    image(rewardsB, 400, 50);
    //  ellipse(475, 125, 150, 150);
    //left button
    image(shareB, 50, 50);
    //  ellipse(125, 125, 150, 150);
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 450) < 150 && !sceneChange) {
      scene1 = false;
      scene2 = true;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 125, 125) < 75 && !sceneChange) {
      scene1 = false;
      scene4 = true;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 125) < 75 && !sceneChange) {
      scene1 = false;
      scene5 = true;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 475, 125) < 75 && !sceneChange) {
      scene1 = false;
      scene6 = true;
    }
  }
  if (scene2) {
    background(0);
    //image(backImg, 0, 0);
    fill(150);
    rect(0, 600, 600, 200);
    fill(255);
    //back button
    image(backB, 25, 25);
    image(bottle, 0, 100);
    //  ellipse(75, 75, 100, 100);
    //take picture button
    ellipse(300, 700, 100, 100);
    if (mouseIsPressed && dist(mouseX, mouseY, 75, 75) < 50 && !sceneChange) {
      sceneChange = true;
      scene2 = false;
      scene1 = true;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 700) < 50 && !sceneChange) {
      addCarbon(randomObject);
      itemcount++;
      sceneChange = true;
      scene2 = false;
      scene3 = true;
    }
  }
  if (scene3) {
    image(backImg, 0, 0);
    image(bottle2, 50, 100, 300, 250);
    image(map, 250, 100, 300, 250);
    //back button
    image(backB, 25, 25);
    //  ellipse(75, 75, 75, 75);
    //take picture button
    ellipse(300, 650, 100, 100);
    textSize(24);
    fill(255);

    switch (randomObject) {
      case 0:
        text(item1, 150, 475);
        text("5 lbs. of carbon prevented", 150, 500);
        if (itemcount === 1 && !updateLog) {
          updateLog = true;
          //info display
          log1 = item1;
        } else if (itemcount === 2 && !updateLog) {
          updateLog = true;
          //info display
          log2 = log1;
          log1 = item1;
        } else if (itemcount === 3 && !updateLog) {
          updateLog = true;
          //info display
          log3 = log2;
          log2 = log1;
          log1 = item1;
        } else if (itemcount === 4 && !updateLog) {
          updateLog = true;
          //info display
          log4 = log3;
          log3 = log2;
          log2 = log1;
          log1 = item1;
        } else if (itemcount >= 5 && !updateLog) {
          updateLog = true;
          //info display
          log5 = log4;
          log4 = log3
          log3 = log2;
          log2 = log1;
          log1 = item1;
        }
        break;
      case 1:
        text(item2, 150, 475);
        text("3 lbs. of carbon prevented", 150, 500);
        if (itemcount == 1 && !updateLog) {
          updateLog = true;
          //info display
          log1 = item2;
        } else if (itemcount == 2 && !updateLog) {
          updateLog = true;
          //info display
          log2 = log1;
          log1 = item2;
        } else if (itemcount == 3 && !updateLog) {
          updateLog = true;
          //info display
          log3 = log2;
          log2 = log1;
          log1 = item2;
        } else if (itemcount == 4 && !updateLog) {
          updateLog = true;
          //info display
          log4 = log3;
          log3 = log2;
          log2 = log1;
          log1 = item2;
        } else if (itemcount >= 5 && !updateLog) {
          updateLog = true;
          //info display
          log5 = log4;
          log4 = log3
          log3 = log2;
          log2 = log1;
          log1 = item2;
        }
        break;
      case 2:
        text(item3, 150, 475);
        text("7 lbs. of carbon prevented", 150, 500);
        if (itemcount == 1 && !updateLog) {
          updateLog = true;
          //info display
          log1 = item3;
        } else if (itemcount == 2 && !updateLog) {
          updateLog = true;
          //info display
          log2 = log1;
          log1 = item3;
        } else if (itemcount == 3 && !updateLog) {
          updateLog = true;
          //info display
          log3 = log2;
          log2 = log1;
          log1 = item3;
        } else if (itemcount == 4 && !updateLog) {
          updateLog = true;
          //info display
          log4 = log3;
          log3 = log2;
          log2 = log1;
          log1 = item3;
        } else if (itemcount >= 5 && !updateLog) {
          updateLog = true;
          //info display
          log5 = log4;
          log4 = log3
          log3 = log2;
          log2 = log1;
          log1 = item3;
        }
        break;
      case 3:
        text(item4, 150, 475);
        text("2 lbs. of carbon prevented", 150, 500);
        if (itemcount == 1 && !updateLog) {
          updateLog = true;
          //info display
          log1 = item4;
        } else if (itemcount == 2 && !updateLog) {
          updateLog = true;
          //info display
          log2 = log1;
          log1 = item4;
        } else if (itemcount == 3 && !updateLog) {
          updateLog = true;
          //info display
          log3 = log2;
          log2 = log1;
          log1 = item4;
        } else if (itemcount == 4 && !updateLog) {
          updateLog = true;
          //info display
          log4 = log3;
          log3 = log2;
          log2 = log1;
          log1 = item4;
        } else if (itemcount >= 5 && !updateLog) {
          updateLog = true;
          //info display
          log5 = log4;
          log4 = log3
          log3 = log2;
          log2 = log1;
          log1 = item4;
        }
        break;
      case 4:
        text(item5, 150, 475);
        text("12 lbs. of carbon prevented", 150, 500);
        if (itemcount == 1 && !updateLog) {
          updateLog = true;
          //info display
          log1 = item5;
        } else if (itemcount == 2 && !updateLog) {
          updateLog = true;
          //info display
          log2 = log1;
          log1 = item5;
        } else if (itemcount == 3 && !updateLog) {
          updateLog = true;
          //info display
          log3 = log2;
          log2 = log1;
          log1 = item5;
        } else if (itemcount == 4 && !updateLog) {
          updateLog = true;
          //info display
          log4 = log3;
          log3 = log2;
          log2 = log1;
          log1 = item5;
        } else if (itemcount >= 5 && !updateLog) {
          updateLog = true;
          //info display
          log5 = log4;
          log4 = log3
          log3 = log2;
          log2 = log1;
          log1 = item5;
        }
        break;

    }
    if (mouseIsPressed && dist(mouseX, mouseY, 75, 75) < 50 && !sceneChange) {
      sceneChange = true;
      scene3 = false;
      scene2 = true;
      updateLog = false;
      randomizeObject();
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 650) < 50 && !sceneChange) {
      sceneChange = true;
      scene3 = false;
      scene1 = true;
      updateLog = false;
      randomizeObject();
    }


  }
  if (scene4) {
    image(backImg, 0, 0);
    //back button
    image(backB, 25, 25);
    //  ellipse(75, 75, 75, 75);
    //share button 1
    image(shareB1, 100, 200, 100, 100);
    //ellipse(150, 250, 100, 100);
    //share button 2
    image(shareB2, 100, 350, 100, 100);
    //ellipse(150, 400, 100, 100);
    //share button 3
    image(shareB3, 100, 500, 100, 100);
    //ellipse(150, 550, 100, 100);
    if (mouseIsPressed && dist(mouseX, mouseY, 75, 75) < 50 && !sceneChange) {
      sceneChange = true;
      scene4 = false;
      scene1 = true;
    }
  }
  if (scene5) {
    image(backImg, 0, 0);
    //back button
    image(backB, 25, 25);
    //  ellipse(75, 75, 75, 75);
    if (itemcount == 1) {
      //info display
      text(log1, 200, 210);
      fill(255, 255, 255, 255);
      ellipse(100, 200, 50, 50);
    } else if (itemcount == 2) {
      //info display
      text(log2, 200, 310);
      text(log1, 200, 210);
      fill(255, 255, 255, 255);
      ellipse(100, 200, 50, 50);
      fill(255, 255, 255, 204);
      ellipse(100, 300, 50, 50);
    } else if (itemcount == 3) {
      //info display
      text(log3, 200, 410);
      text(log2, 200, 310);
      text(log1, 200, 210);
      fill(255, 255, 255, 255);
      ellipse(100, 200, 50, 50);
      fill(255, 255, 255, 204);
      ellipse(100, 300, 50, 50);
      fill(255, 255, 255, 153);
      ellipse(100, 400, 50, 50);
    } else if (itemcount == 4) {
      //info display
      text(log4, 200, 510);
      text(log3, 200, 410);
      text(log2, 200, 310);
      text(log1, 200, 210);
      fill(255, 255, 255, 255);
      ellipse(100, 200, 50, 50);
      fill(255, 255, 255, 204);
      ellipse(100, 300, 50, 50);
      fill(255, 255, 255, 153);
      ellipse(100, 400, 50, 50);
      fill(255, 255, 255, 102);
      ellipse(100, 500, 50, 50);
    } else if (itemcount >= 5) {
      //info display
      text(log5, 200, 610);
      text(log4, 200, 510);
      text(log3, 200, 410);
      text(log2, 200, 310);
      text(log1, 200, 210);
      fill(255, 255, 255, 255);
      ellipse(100, 200, 50, 50);
      fill(255, 255, 255, 204);
      ellipse(100, 300, 50, 50);
      fill(255, 255, 255, 153);
      ellipse(100, 400, 50, 50);
      fill(255, 255, 255, 102);
      ellipse(100, 500, 50, 50);
      fill(255, 255, 255, 51);
      ellipse(100, 600, 50, 50);
    }
    //text display
    textSize(24);
    fill(255);
    text("Total estimated Carbon Prevented(in lbs.):", 25, 700);
    text(totalCarbon, 500, 700);
    if (mouseIsPressed && dist(mouseX, mouseY, 75, 75) < 50 && !sceneChange) {
      sceneChange = true;
      scene5 = false;
      scene1 = true;
    }
  }
  if (scene6) {
    image(backImg, 0, 0);
    //back button
    image(backB, 25, 25);
    //ellipse(75, 75, 75, 75);


    if (mouseIsPressed && dist(mouseX, mouseY, 75, 75) < 50 && !sceneChange) {
      sceneChange = true;
      scene6 = false;
      scene1 = true;
    }
  }
  // text(randomObject, 50, 50);
  // text(itemcount, 100, 50);
  // text(log1, 50, 600);
  // text(log2, 50, 610);
  // text(log3, 50, 620);
  // text(log4, 50, 630);
  // text(log5, 50, 640);
}

function randomizeObject() {
  randomObject = floor(random(5));
  //randomObject = 0;
}

function addCarbon(r) {
  switch (r) {
    case 0:
      totalCarbon = totalCarbon + 5;
      break;
    case 1:
      totalCarbon = totalCarbon + 3;
      break;
    case 2:
      totalCarbon = totalCarbon + 7;
      break;
    case 3:
      totalCarbon = totalCarbon + 2;
      break;
    case 4:
      totalCarbon = totalCarbon + 12;
      break;
  }
}
