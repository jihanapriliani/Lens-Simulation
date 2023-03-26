import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';

import Concavemirror from '../components/ConcaveMirror';
import Slider from '../components/Slider';
import Rays from '../components/Rays';
import Objects from '../components/Objects';
import Header from '../components/Header';


function ConcaveMirror() {
  const [heigth, setHeight] = useState(100);
  const [distance, setDistance] = useState(200);
  const [focus, setFocus] = useState(80);

  const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
  const [size_, setSize_] = useState(getSizeReflection(distance, heigth, distance_));


  const [label, setLabel] = useState(false);
  const [ray, setRay] = useState("principal");

  useEffect(() => {
    setDistance_(-getDistanceReflection(distance, focus));
    setSize_(getSizeReflection(distance, heigth, distance_));
  }, [heigth, distance, focus])


  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 600;


  const handleDistanceSlider = (e) => {
    setDistance(parseInt(e.target.value))
  }

  const handleHeightSlider = (e) => {
    setHeight(parseInt(e.target.value))
  }

  const handleFocusSlider = (e) => {
    setFocus(parseInt(e.target.value))
  }

 const handleLabelClicked = (e) => {
  setLabel(e.target.checked);
 }

 const handleRayClicked = (e) => {
  setRay(e.target.value);
 }

 const handleObjectClicked = (e) => {

 }
 

  return (
    <div className='flex flex-col w-[100vw] justify-center bg-emerald-100'>
      
      <Header />

      <div className="w-100 grid grid-cols-6 gap-4 m-10 shadow-xl">
        <div className='col-span-4'>
            <Concavemirror width={CANVAS_WIDTH} height={CANVAS_HEIGHT} size={heigth} distance={distance} focus={focus} hasLabel={label} ray={ray} />
        </div>
        <div className='col-span-2 bg-white rounded-lg drop-shadow-lg p-6' > 
          <div>
            <Slider 
              title="Jarak Benda"
              maxValue={CANVAS_WIDTH / 2} 
              defaultValue={CANVAS_WIDTH / 2 - distance} 
              onChange={handleDistanceSlider}
            />
  
            <Slider 
              title="Tinggi Benda"
              maxValue={CANVAS_HEIGHT / 2} 
              defaultValue={CANVAS_HEIGHT / 2 - heigth} 
              onChange={handleHeightSlider}
            />
  
            <Slider 
              title="Titik Fokus"
              maxValue={150} 
              defaultValue={focus} 
              onChange={handleFocusSlider}
            />
          </div>
        <div className='flex justify-between rounded-lg drop-shadow-xl'>
          <Rays />
          <Objects />         
        </div>
  
        <div class="flex items-center pl-3">
            <input id="label-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={handleLabelClicked} />
            <label for="label-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tampilkan Nilai</label>
        </div>
  
  
      </div>
      </div>
    </div>
  );
}

export default ConcaveMirror;
