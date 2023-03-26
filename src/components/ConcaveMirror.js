import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

import { dda, getBoundPoint, drawEllipse, getDistanceReflection, getSizeReflection, setLensLabel, setMarginalConvexMirror } from '../utils';


export default function ConcaveMirror(props) {
    const {width, height, size, distance, focus, hasLabel, ray} = props;

    const [distance_, setDistance_] = useState(getDistanceReflection(distance, focus));
    const [size_, setSize_] = useState(getSizeReflection(distance, size, distance_));

    const [infinite1, setInfinite1] = useState(getBoundPoint(width / 2 - distance, height / 2 - size, width / 2 - distance_, height / 2 - size_));



    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);
        
        p5.stroke(32, 111, 153);
        p5.stroke(32, 111, 153);
        p5.fill(173, 216, 230);
        p5.ellipse(width / 2, height/2, focus, height);
        p5.fill(255,255,255);
        p5.stroke(255);
        p5.rect(width / 2 + focus / 20, 0, focus / 2, height);

        p5.fill(0,0,0);
        p5.textSize(18);
        p5.text('f', width / 2 - focus, height / 2);
        p5.text('r', width / 2 - 2 * focus, height / 2);

        p5.text('f', width / 2 + focus, height / 2);
        p5.text('r', width / 2 + 2 * focus, height / 2);

        p5.stroke("black");
        dda(0, height / 2, width, height / 2, p5);
        

        p5.stroke(50, 168, 82);
        dda(width / 2 - distance, height / 2, width / 2 - distance, height / 2 - size, p5);
        p5.stroke(85, 115, 70);
        dda(width / 2 + distance_, height / 2, width / 2 + distance_, height / 2 - size_, p5);
        
        if(ray === "marginal") {
            // p5.stroke("red");
            // dda(width / 2 - distance, height / 2 - size, width / 2, 0, p5);
            // dda(width / 2, 0, width / 2 - distance_, height / 2 + size_, p5);
            // p5.stroke("yellow");
            // dda(width / 2 - distance, height / 2 - size, width / 2, height / 2, p5);
            // dda(width / 2, height / 2, width / 2 - distance_, height / 2 + size_, p5);
            // p5.stroke("purple");
            // dda(width / 2 - distance, height / 2 - size, width / 2, height, p5);
            // dda(width / 2, height, width / 2 - distance_, height / 2 + size_, p5);
            // setMarginalConvexMirror(p5, height, width, infinite1);

        }

        if(ray === "principal") {
            p5.stroke("red");
            dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size, p5);
            dda(width / 2 + distance_, height / 2 - size_, width / 2, height / 2 - size, p5)

            p5.stroke("yellow");
            dda(width / 2 - distance, height / 2 - size, width / 2, height / 2 - size_, p5);
            dda(width / 2 + distance_, height / 2 - size_, width / 2, height / 2 - size_, p5);
            
            p5.stroke("purple");
            dda(width / 2 - distance, height / 2 - size, width / 2, height / 2, p5);
            dda(width / 2 + distance_, height / 2 - size_, width / 2, height / 2, p5);
           


        //   setPrincipalRay(p5, height, width, size, size_, infinite1, infinite2, infinite3, infinite4);
        }


        if(hasLabel) {
            setLensLabel(p5, size, width, distance, height, size_, distance_, focus);
        }


    }

    useEffect(() => {
        setDistance_(getDistanceReflection(distance, focus));
        setSize_(getSizeReflection(distance, size, distance_));

        setInfinite1(getBoundPoint(width / 2, height / 2 - size, width / 2 - distance_, height / 2 - size_))
    }, [distance, size, focus])
  
    console.log(infinite1);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )

}


ConcaveMirror.propType = {
    height: propType.number,
    width: propType.number,
}
