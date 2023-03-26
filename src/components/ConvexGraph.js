import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { dda, ddaInfinite } from '../utils/DDA';
import drawCircle from '../utils/Midpoint';
import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';

export default function ConvexGraph(props) {
    const {width, height, size, distance, focus} = props;

    const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
    const [size_, setSize_] = useState(getSizeReflection(distance, size, distance_));


    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);
        
        p5.stroke(32, 111, 153);
        drawCircle(width / 2, height / 2, focus / 3, height / 2, p5);

        p5.textSize(18);
        p5.text('f', width / 2 - focus, height / 2);
        p5.text('r', width / 2 - 2 * focus, height / 2);

        p5.text('f', width / 2 + focus, height / 2);
        p5.text('r', width / 2 + 2 * focus, height / 2);
        
        // sumbu cartesius
        p5.stroke("black");
        dda(width / 2, 0, width / 2, height, p5);
        dda(0, height / 2, width, height / 2, p5);
        
        // OBJECT
        p5.stroke("gray");
        dda(width / 2 - distance, height /2, width / 2 - distance, height / 2 - size, p5);

        p5.stroke("brown")
        dda(width / 2 - distance + 40, height /2, width / 2 - distance + 40, height / 2 - size + 20, p5);
        dda(width / 2 - distance - 40, height /2 , width / 2 - distance - 40, height / 2 - size + 20, p5);
        dda(width / 2 - distance - 40, height / 2 - size + 20 , width /2 - distance  + 40, height / 2 - size + 20, p5);


        dda(width / 2 - distance + 20, height /2 ,width / 2 - distance + 20, height / 2 - size/4, p5);
        dda(width / 2 - distance - 20, height /2, width / 2 - distance - 20, height / 2 - size /4, p5);
        dda(width / 2 - distance - 20, height / 2 - size/4, width /2 - distance  + 20, height / 2 - size/4, p5);


        dda(width / 2 - distance - 110 , height /2, width / 2 - distance - 150, height / 2 - size   + 4, p5);
        dda(width / 2 - distance - 85 , height /2, width / 2 - distance - 120, height / 2 - size  +8, p5);
        dda(width / 2 - distance - 63 , height /2, width / 2 - distance - 95, height / 2 - size+ 12, p5);
        dda(width / 2 - distance - 40 , height /2, width / 2 - distance - 70, height / 2 - size + 15, p5);
        dda(width / 2 - distance - 175, height / 2 -size, width /2 - distance  -40, height / 2 - size +20, p5);


        dda(width / 2 - distance + 110 , height /2, width / 2 - distance + 150, height / 2 - size   + 4, p5);
        dda(width / 2 - distance + 85 , height /2, width / 2 - distance + 120, height / 2 - size  +8, p5);
        dda(width / 2 - distance + 63 , height /2, width / 2 - distance + 95, height / 2 - size+ 12, p5);
        dda(width / 2 - distance + 40 , height /2, width / 2 - distance + 70, height / 2 - size + 15, p5);
        dda(width / 2 - distance + 175, height / 2 -size, width /2 - distance  +40, height / 2 - size +20, p5);



        // REFLECTION: OBJECT
        p5.stroke(85, 115, 70);
        dda(width / 2 - distance_, height / 2, width / 2 - distance_, height / 2 - size_, p5);

        p5.stroke("blue")
        dda(width / 2 - distance_ + 40, height /2, width / 2 - distance_ + 40, height / 2 - size_ + 20, p5);
        dda(width / 2 - distance_ - 40, height /2 , width / 2 - distance_ - 40, height / 2 - size_ + 20, p5);
        dda(width / 2 - distance_ - 40, height / 2 - size_ + 20 , width /2 - distance_  + 40, height / 2 - size_ + 20, p5);


        dda(width / 2 - distance_ + 20, height /2 ,width / 2 - distance_ + 20, height / 2 - size_/4, p5);
        dda(width / 2 - distance_ - 20, height /2, width / 2 - distance_ - 20, height / 2 - size_ /4, p5);
        dda(width / 2 - distance_ - 20, height / 2 - size_/4, width /2 - distance_  + 20, height / 2 - size_/4, p5);


        dda(width / 2 - distance_ - 110 , height /2, width / 2 - distance_ - 150, height / 2 - size_   + 4, p5);
        dda(width / 2 - distance_ - 85 , height /2, width / 2 - distance_ - 120, height / 2 - size_  +8, p5);
        dda(width / 2 - distance_ - 63 , height /2, width / 2 - distance_ - 95, height / 2 - size_+ 12, p5);
        dda(width / 2 - distance_ - 40 , height /2, width / 2 - distance_ - 70, height / 2 - size_ + 15, p5);
        dda(width / 2 - distance_ - 175, height / 2 -size_, width /2 - distance_  -40, height / 2 - size_ +20, p5);


        dda(width / 2 - distance_ + 110 , height /2, width / 2 - distance_ + 150, height / 2 - size_   + 4, p5);
        dda(width / 2 - distance_ + 85 , height /2, width / 2 - distance_ + 120, height / 2 - size_  +8, p5);
        dda(width / 2 - distance_ + 63 , height /2, width / 2 - distance_ + 95, height / 2 - size_+ 12, p5);
        dda(width / 2 - distance_ + 40 , height /2, width / 2 - distance_ + 70, height / 2 - size_ + 15, p5);
        dda(width / 2 - distance_ + 175, height / 2 -size_, width /2 - distance_  +40, height / 2 - size_ +20, p5);



        // LINE ON THE TOP OF OBJECT (LIGHT 1)
        p5.stroke("red");
        dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size, p5);
        dda(width / 2 - distance, height / 2 - size, 0, height / 2 - size, p5);
        ddaInfinite(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_, 4, p5);



     
        // LINE THAT GO ON THE BOTTOM OBJECT (LIGHT 2)
        p5.stroke("green");
        ddaInfinite(width / 2 - distance, height / 2 - size,  width / 2, height / 2 - size_, 2, p5);
        ddaInfinite(width / 2, height / 2 - size_,  width / 2, height / 2 - size_, 2, p5);
        dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size_, p5);
        dda(width / 2, height / 2 - size_, width / 2 - distance_, height / 2 - size_, p5);
        dda(width / 2 - distance_, height / 2 - size_, width, height / 2 - size_, p5);

        // LIGHT 3
        p5.stroke("purple");
        ddaInfinite(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_, 2, p5);
        ddaInfinite(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_, 4, p5);

    }

    useEffect(() => {
        setDistance_(-getDistanceReflection(distance, focus));
        setSize_(getSizeReflection(distance, size, distance_));
    }, [size, distance, focus, draw])
  
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )

}

ConvexGraph.propType = {
    height: propType.number,
    width: propType.number,
}
