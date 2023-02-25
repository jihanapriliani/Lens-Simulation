import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';

export default function Graphics(props) {
    const {width, height} = props;

    const [size, setSize] = useState(100);
    const [distance, setDistance] = useState(200);
    const [focus, setFocus] = useState(80);

    const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
    const [size_, setSize_] = useState(getSizeReflection(distance, size, distance_));
  
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }
      
    const draw = p5 => {
        
        // p5.stroke(32, 111, 153);
        // p5.ellipse(width / 2, height / 2, focus / 3, height);

        p5.stroke(171, 122, 72);
        p5.line(width / 2, 0, width / 2, height); // Y Axis
        p5.line(0, height / 2, width, height / 2); // X Axis
        
        // OBJECT
        p5.stroke(50, 168, 82);
        p5.line(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size); 
        // REFLECTION: OBJECT
        p5.stroke(85, 115, 70);
        p5.line(width / 2 - distance_, height / 2, width / 2 - distance_, height / 2 - size_); 


        // LINE ON THE TOP OF OBJECT (LIGHT 1)
        p5.stroke(255, 204, 0);
        p5.line(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size);
        p5.line(width / 2 - distance, height / 2 - size, 0, height / 2 - size);
        p5.line(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_);
        // kurang yang lurus terus


        // LINE THAT GO ON THE BOTTOM OBJECT (LIGHT 2)
        // kurang yang lurus terus
        p5.stroke(255, 204, 0);
        p5.line(width / 2 - distance, height / 2 - size,  width / 2, height / 2 - size_)
        p5.line(width / 2, height / 2 - size_, width / 2 - distance_, height / 2 - size_)
        p5.line(width / 2 - distance_, height / 2 - size_, width, height / 2 - size_)

        // LIGHT 3
        p5.stroke(255, 204, 0);
        // kurang yang lurus terus
        p5.line(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_)
        // kurang yang lurus terus
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )
}

Graphics.propType = {
    height: propType.number,
    width: propType.number,
}
