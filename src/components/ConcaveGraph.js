import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { dda, ddaInfinite } from '../utils/DDA';
import drawCircle from '../utils/Midpoint';
import { getDistanceReflectionconcave, getSizeReflectionconcave } from '../utils/Reflections';

export default function ConcaveGraph(props) {
    const {width, height, size, distance, focus} = props;

    const [distance_, setDistance_] = useState(getDistanceReflectionconcave(distance, focus));
    const [size_, setSize_] = useState(getSizeReflectionconcave(distance, size, distance_));


    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);

        p5.textSize(18);
        p5.text('f', width / 2 - focus, height / 2);
        p5.text('r', width / 2 - 2 * focus, height / 2);

        p5.stroke("black");
        dda(width / 2, 0, width / 2, height, p5);
        dda(0, height / 2, width, height / 2, p5);
        
        // OBJECT
        p5.stroke(50, 168, 82);
        dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size, p5);

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
        dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size_, p5);

        // LINE ON THE TOP OF OBJECT (LIGHT 1)
        p5.stroke("red");
        dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size, p5);        
     
        // LINE THAT GO ON THE BOTTOM OBJECT (LIGHT 2)
        p5.stroke("yellow");
        dda(width / 2 - distance, height / 2 - size_, width / 2, height / 2 - size, p5);

        // LINE ON THE BOTTOM OF REFLECTION (LIGHT 1)
        p5.stroke("purple");
        dda(width / 2 - distance, height / 2 - size_, width / 2, height / 2 - size_, p5);

        // LINE THAT GO ON THE BOTTOM OBJECT (LIGHT 3)
        p5.stroke("green");
        dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size_, p5);

    }

    useEffect(() => {
        setDistance_(-getDistanceReflectionconcave(distance, focus));
        setSize_(getSizeReflectionconcave(distance, size, distance_));
    }, [size, distance, focus, draw])
  
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )

}

ConcaveGraph.propType = {
    height: propType.number,
    width: propType.number,
}
