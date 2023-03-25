import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { dda, getBoundPoint } from '../utils/DDA';
import drawCircle from '../utils/Midpoint';
import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';

export default function ConvexGraph(props) {
    const {width, height, size, distance, focus} = props;

    const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
    const [size_, setSize_] = useState(getSizeReflection(distance, size, distance_));

    const [infinite1, setInfinite1] = useState(getBoundPoint(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_));
    const [infinite2, setInfinite2] = useState(getBoundPoint(width / 2, height / 2 - size_, width / 2 - distance, height / 2 -size));
    const [infinite3, setInfinite3] = useState(getBoundPoint(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_));
    const [infinite4, setInfinite4] = useState(getBoundPoint(width / 2 - distance_, height / 2 - size_, width / 2 - distance, height / 2 - size));


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

        p5.stroke("black");
        dda(width / 2, 0, width / 2, height, p5);
        dda(0, height / 2, width, height / 2, p5);
        
        // OBJECT
        p5.stroke(50, 168, 82);
        dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size, p5);
        // REFLECTION: OBJECT
        p5.stroke(85, 115, 70);
        dda(width / 2 - distance_, height / 2, width / 2 - distance_, height / 2 - size_, p5);
        
        p5.textSize(12);
        p5.text(size, width / 2 - distance + 10, height / 2 - size / 2);
        p5.text(-(size_), width / 2 - distance_ + 10, height / 2 - size_ / 2);
        p5.text(distance, width / 2 - distance / 2, height / 2 + 15);
        p5.text(-(distance_), width / 2 - distance_ / 2, height / 2 + 15);

        
        p5.stroke("red");
        dda(0, height / 2 - size, width / 2, height / 2 - size, p5);
        dda(width / 2, height / 2 - size, infinite1[0], infinite1[1], p5);
        
     
        p5.stroke("yellow");
        dda(width / 2, height / 2 - size_, width, height / 2 - size_, p5);
        dda(width / 2, height / 2 - size_, infinite2[0], infinite2[1], p5);

        p5.stroke("purple");
        dda(infinite3[0], infinite3[1], infinite4[0], infinite4[1], p5);
    }

    useEffect(() => {
        setDistance_(-getDistanceReflection(distance, focus));
        setSize_(getSizeReflection(distance, size, distance_));

        setInfinite1(getBoundPoint(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_))
        setInfinite2(getBoundPoint(width / 2, height / 2 - size_, width / 2 - distance, height / 2 - size))
        setInfinite3(getBoundPoint(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_));
        setInfinite4(getBoundPoint(width / 2 - distance_, height / 2 - size_, width / 2 - distance, height / 2 - size))

    }, [distance, size, focus])
  
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
