import { dda, getBoundPoint } from './DDA';
import drawEllipse from './Midpoint';
import { getDistanceReflection, getSizeReflection } from './Reflections';

export function setLensLabel(p5, size, width, distance, height, size_, distance_, focus) {
    p5.textSize(12);
    p5.stroke(0,0,0);
    p5.text(size, width / 2 - distance + 10, height / 2 - size / 2);
    p5.text(-(size_), width / 2 - distance_ + 10, height / 2 - size_ / 2);
    p5.text(distance, width / 2 - distance / 2, height / 2 + 15);
    p5.text(-(distance_), width / 2 - distance_ / 2, height / 2 + 15);
    p5.text("Optical Axis", 20, height / 2 + 15);
    p5.text("f : " + focus, width / 2 + 10, 50);
}


export {
    dda,
    getBoundPoint,
    drawEllipse,
    getDistanceReflection,
    getSizeReflection
};