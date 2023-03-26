import { dda, getBoundPoint } from './DDA';
import drawEllipse from './Midpoint';
import { getDistanceReflection, getSizeReflection } from './Reflections';

export {
    dda,
    getBoundPoint,
    drawEllipse,
    getDistanceReflection,
    getSizeReflection
};

export function setLensLabel(p5, size, width, distance, height, size_, distance_, focus) {
    p5.textSize(16);
    p5.stroke(0,0,0);
    p5.text(size, width / 2 - distance + 10, height / 2 - size / 2);
    p5.text(-(size_), width / 2 - distance_ + 10, height / 2 - size_ / 2);
    p5.text(distance, width / 2 - distance / 2, height / 2 + 15);
    p5.text(-(distance_), width / 2 - distance_ / 2, height / 2 + 15);
    p5.text("Optical Axis", 20, height / 2 + 15);
    p5.text("f : " + focus, width / 2 + 10, 50);
}

export function setPrincipalConvexLens(p5, height, width, size, size_, infinite1, infinite2, infinite3, infinite4) {
    p5.stroke("red");
    dda(0, height / 2 - size, width / 2, height / 2 - size, p5);
    p5.line(width / 2, height / 2 - size, infinite1[0], infinite1[1]);
    p5.stroke("yellow");
    dda(width / 2, height / 2 - size_, width, height / 2 - size_, p5);
    p5.line(width / 2, height / 2 - size_, infinite2[0], infinite2[1]);
    p5.stroke("purple");
    p5.line(infinite3[0], infinite3[1], infinite4[0], infinite4[1]);

}

export function setMarginalConvexLens(p5, height, width, infinite1, infinite2, infinite3, infinite4, infinite5, infinite6) {
    p5.stroke("red");
    p5.line(infinite1[0], infinite1[1], width / 2, 0);
    p5.line(width / 2, 0, infinite2[0], infinite2[1]);
    p5.stroke("yellow");
    p5.line(width / 2, height, infinite5[0], infinite5[1]);
    p5.line(width / 2, height, infinite6[0], infinite6[1])
    p5.stroke("purple");
    p5.line(infinite3[0], infinite3[1], infinite4[0], infinite4[1]);
}

export function setMarginalConcaveLens(p5, height, width, infinite1) {
    // p5.stroke("red");
    // p5.line(infinite1[0], infinite1[1], width / 2, 0);
    // p5.line(width / 2, 0, infinite2[0], infinite2[1]);
    // p5.stroke("yellow");
    // p5.line(width / 2, height, infinite5[0], infinite5[1]);
    // p5.line(width / 2, height, infinite6[0], infinite6[1])
    // p5.stroke("purple");
    // p5.line(infinite3[0], infinite3[1], infinite4[0], infinite4[1]);
}

export function setPrincipalConcaveLens() {
    
}

export function drawStraightLine(p5, width, height, size, distance, size_, distance_) {
        p5.stroke(50, 168, 82);
        dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size, p5);
        p5.stroke(85, 115, 70);
        dda(width / 2 - distance_, height / 2, width / 2 - distance_, height / 2 - size_, p5);
}




export function drawBuilding(p5, width, height, size, distance, size_, distance_) {
      // OBJECT
      p5.stroke(50, 168, 82);
      dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size, p5);
      p5.stroke("gray");
      dda(width / 2 - distance, height /2, width / 2 - distance, height / 2 - size, p5);

      p5.stroke("brown")
      dda(width / 2 - distance + 40, height /2, width / 2 - distance + 40, height / 2 - size/2, p5);
      dda(width / 2 - distance - 40, height /2 , width / 2 - distance - 40, height / 2 - size /2, p5);
      dda(width / 2 - distance - 40, height / 2 - size/2 , width /2 - distance  + 40, height / 2 - size/2, p5);

      dda(width / 2 - distance + 20, height /2 ,width / 2 - distance + 20, height / 2 - size/16, p5);
      dda(width / 2 - distance - 20, height /2, width / 2 - distance - 20, height / 2 - size /16, p5);
      dda(width / 2 - distance - 20, height / 2 - size/16, width /2 - distance  + 20, height / 2 - size/16, p5);

      dda(width / 2 - distance - 125 , height /2, width / 2 - distance - 150, height / 2 - size  /2 - 17, p5);
      dda(width / 2 - distance - 100 , height /2, width / 2 - distance - 120, height / 2 - size  /2 - 11, p5);
      dda(width / 2 - distance - 75 , height /2, width / 2 - distance - 95, height / 2 - size  /2 - 9, p5);
      dda(width / 2 - distance - 55 , height /2, width / 2 - distance - 75, height / 2 - size  /2 - 5, p5);
      dda(width / 2 - distance - 40 , height /2, width / 2 - distance - 55, height / 2 - size  /2 - 3, p5);
      dda(width / 2 - distance - 175, height / 2 - size /2 - 20 , width /2 - distance  -40, height / 2 - size/2, p5);

      dda(width / 2 - distance + 125 , height /2, width / 2 - distance + 150, height / 2 - size  /2 - 17, p5);
      dda(width / 2 - distance + 100 , height /2, width / 2 - distance + 120, height / 2 -  size  /2 -  11, p5);
      dda(width / 2 - distance + 75 , height /2, width / 2 - distance + 95, height / 2 - size  /2 -  9, p5);
      dda(width / 2 - distance + 55 , height /2, width / 2 - distance + 75, height / 2 - size  /2 - 5, p5);
      dda(width / 2 - distance + 40 , height /2, width / 2 - distance + 55, height / 2 - size  /2 - 3, p5);
      dda(width / 2 - distance + 175, height / 2 - size /2 - 20, width /2 - distance  +40, height / 2  - size/2, p5);




      // REFLECTION: OBJECT
      p5.stroke(85, 115, 70);
      dda(width / 2 - distance_, height / 2, width / 2 - distance_, height / 2 - size_, p5);

      p5.stroke("blue")
      dda(width / 2 - distance_ + 40, height /2,width / 2 - distance_ + 40, height / 2 - size_/2, p5);
      dda(width / 2 - distance_ - 40, height /2 , width / 2 - distance_ - 40, height / 2 - size_ /2, p5);
      dda(width / 2 - distance_ - 40, height / 2 - size_/2 , width /2 - distance_  + 40, height / 2 - size_/2, p5);

      dda(width / 2 - distance_ + 20, height /2 ,width / 2 - distance_ + 20, height / 2 - size_/16, p5);
      dda(width / 2 - distance_ - 20, height /2, width / 2 - distance_ - 20, height / 2 - size_ /16, p5);
      dda(width / 2 - distance_ - 20, height / 2 - size_/16, width /2 - distance_  + 20, height / 2 - size_/16, p5);


      dda(width / 2 - distance_ - 125 , height /2, width / 2 - distance_ - 150, height / 2 - size_  /2 - 17, p5);
      dda(width / 2 - distance_ - 100 , height /2, width / 2 - distance_ - 120, height / 2 - size_  /2 - 11, p5);
      dda(width / 2 - distance_ - 75 , height /2, width / 2 - distance_ - 95, height / 2 - size_  /2 - 9, p5);
      dda(width / 2 - distance_ - 55 , height /2, width / 2 - distance_ - 75, height / 2 - size_  /2 - 5, p5);
      dda(width / 2 - distance_ - 40 , height /2, width / 2 - distance_ - 55, height / 2 - size_  /2 - 3, p5);
      dda(width / 2 - distance_ - 175, height / 2 - size_ /2 - 20 , width /2 - distance_  - 40, height / 2 - size_/2, p5);

      dda(width / 2 - distance_ + 125 , height /2, width / 2 - distance_ + 150, height / 2 - size_  /2 - 17, p5);
      dda(width / 2 - distance_ + 100 , height /2, width / 2 - distance_ + 120, height / 2 -  size_  /2 -  11, p5);
      dda(width / 2 - distance_ + 75 , height /2, width / 2 - distance_ + 95, height / 2 - size_  /2 -  9, p5);
      dda(width / 2 - distance_ + 55 , height /2, width / 2 - distance_ + 75, height / 2 - size_  /2 - 5, p5);
      dda(width / 2 - distance_ + 40 , height /2, width / 2 - distance_ + 55, height / 2 - size_  /2 - 3, p5);
      dda(width / 2 - distance_ + 175, height / 2 - size_ /2 - 20, width /2 - distance_  + 40, height / 2  - size_/2, p5);
}


