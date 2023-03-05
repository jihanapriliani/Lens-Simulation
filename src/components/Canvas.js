import React, {useState, useRef, useEffect} from 'react';

import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';


export default function Canvas(props) {

  const {width, height, size, distance, focus} = props;


  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()

    // ctx.beginPath()
    // ctx.arc(width / 2, 0, width / 2, height); // Y Axis
    // ctx.line(0, height / 2, width, height / 2); // X Axis
    // ctx.fill()

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    // draw a red line
    
    // Y AXIS
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(100, 100);
    ctx.stroke();



    console.log(width, height);



    
  }

  const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
  // const [size_, setSize_] = useState(getSizeReflection(distance, s ize, distance_));

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      draw(context, frameCount)
    }
    render()
    
    // return () => {
    //   window.cancelAnimationFrame(animationFrameId)
    // }

  }, [draw, size, distance, focus])


  return (
    <canvas style={{ width, height }} ref={canvasRef} />
  )
}
