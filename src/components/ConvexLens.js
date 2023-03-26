import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { dda, getBoundPoint, drawEllipse, getDistanceReflection, getSizeReflection, setLensLabel, setPrincipalConvexLens, setMarginalConvexLens, drawBuilding, drawStraightLine } from '../utils';


export default function ConvexLens(props) {
    const {width, height, size, distance, focus, hasLabel, ray} = props;

    const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
    const [size_, setSize_] = useState(getSizeReflection(distance, size, distance_));

    const [infinite1, setInfinite1] = useState(getBoundPoint(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_));
    const [infinite2, setInfinite2] = useState(getBoundPoint(width / 2, height / 2 - size_, width / 2 - distance, height / 2 -size));
    const [infinite3, setInfinite3] = useState(getBoundPoint(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_));
    const [infinite4, setInfinite4] = useState(getBoundPoint(width / 2 - distance_, height / 2 - size_, width / 2 - distance, height / 2 - size));
    const [infinite5, setInfinite5] = useState(getBoundPoint(width / 2, 0, width / 2 - distance, height / 2 - size));
    const [infinite6, setInfinite6] = useState(getBoundPoint(width / 2, 0, width / 2 - distance_, height / 2 - size_));
    const [infinite7, setInfinite7] = useState(getBoundPoint(width / 2, height, width / 2 - distance, height / 2 - size));
    const [infinite8, setInfinite8] = useState(getBoundPoint(width / 2, height, width / 2 - distance_, height / 2 - size_));


    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);
        
        p5.stroke(32, 111, 153);
        drawEllipse(width / 2, height / 2, focus / 3, height / 2, p5);

        p5.textSize(18);
        p5.text('f', width / 2 - focus, height / 2);
        p5.text('r', width / 2 - 2 * focus, height / 2);


        p5.text('f', width / 2 + focus, height / 2);
        p5.text('r', width / 2 + 2 * focus, height / 2);

        p5.stroke("black");
        dda(width / 2, 0, width / 2, height, p5);
        dda(0, height / 2, width, height / 2, p5);
        

        drawStraightLine(p5, width, height, size, distance, size_, distance_);
        
        if(ray === "marginal") {
            setMarginalConvexLens(p5, height, width, infinite5, infinite6, infinite3, infinite4, infinite7, infinite8);
        }

        if(ray === "principal") {
            setPrincipalConvexLens(p5, height, width, size, size_, infinite1, infinite2, infinite3, infinite4);
        }


        if(hasLabel) {
            setLensLabel(p5, size, width, distance, height, size_, distance_, focus);
        }


    }

    useEffect(() => {
        setDistance_(-getDistanceReflection(distance, focus));
        setSize_(getSizeReflection(distance, size, distance_));

        setInfinite1(getBoundPoint(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_))
        setInfinite2(getBoundPoint(width / 2, height / 2 - size_, width / 2 - distance, height / 2 - size))
        setInfinite3(getBoundPoint(width / 2 - distance, height / 2 - size,  width / 2 - distance_, height / 2 - size_));
        setInfinite4(getBoundPoint(width / 2 - distance_, height / 2 - size_, width / 2 - distance, height / 2 - size));
        setInfinite5(getBoundPoint(width / 2, 0, width / 2 - distance, height / 2 - size));
        setInfinite6(getBoundPoint(width / 2, 0, width / 2 - distance_, height / 2 - size_));
        setInfinite7(getBoundPoint(width / 2, height, width / 2 - distance, height / 2 - size));
        setInfinite8(getBoundPoint(width / 2, height, width / 2 - distance_, height / 2 - size_));

    }, [distance, size, focus])
  
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )

}


ConvexLens.propType = {
    height: propType.number,
    width: propType.number,
}
