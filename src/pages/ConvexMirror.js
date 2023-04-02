import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { getDistanceReflection, getSizeReflection } from '../utils/Reflections';

import Convexmirror from '../components/ConvexMirror';
import Slider from '../components/Slider';
import Rays from '../components/Rays';
import Objects from '../components/Objects';
import Header from '../components/Header';

import debounce from 'lodash.debounce';



function ConvexMirror() {
  const [heigth, setHeight] = useState(100);
  const [distance, setDistance] = useState(200);
  const [focus, setFocus] = useState(80);

  const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
  const [size_, setSize_] = useState(getSizeReflection(distance, heigth, distance_));


  const [label, setLabel] = useState(false);
  const [ray, setRay] = useState("principal");
  const [object, setObject] = useState("garis");

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
  setObject(e.target.value)
 }

   const decounceDistanceHandler = useCallback(
    debounce(handleDistanceSlider, 20)
  , []);

  const decounceHeightHandler = useCallback(
    debounce(handleHeightSlider, 20)
  , []);

  const decounceFocusHandler = useCallback(
    debounce(handleFocusSlider, 20)
  , []);

 

  return (
    <div className='flex flex-col w-[100vw] justify-center bg-emerald-100'>
  
      <Header />

      <div className="w-100 grid grid-cols-6 gap-4 m-10 shadow-xl">
        <div className='col-span-4'>
            <Convexmirror width={CANVAS_WIDTH} height={CANVAS_HEIGHT} size={heigth} distance={distance} focus={focus} hasLabel={label} ray={ray} object={object} />
        </div>
        <div className='col-span-2 bg-white rounded-lg drop-shadow-lg p-6' > 
          <div>
            <Slider 
              title="Jarak Benda"
              maxValue={CANVAS_WIDTH / 2} 
              defaultValue={CANVAS_WIDTH / 2 - distance} 
              onChange={decounceDistanceHandler}
            />
  
            <Slider 
              title="Tinggi Benda"
              maxValue={CANVAS_HEIGHT / 2} 
              defaultValue={CANVAS_HEIGHT / 2 - heigth} 
              onChange={decounceHeightHandler}
            />
  
            <Slider 
              title="Titik Fokus"
              maxValue={150} 
              defaultValue={focus} 
              onChange={decounceFocusHandler}
            />
          </div>
        <div className='flex justify-between rounded-lg drop-shadow-xl'>
          {/* <Rays /> */}
          <div className='pt-10 pb-10'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Jenis Pemantulan</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="principal" type="radio" value="principal" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={ handleRayClicked}/>
                        <label for="principal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Principal</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="marginal" type="radio" value="marginal" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleRayClicked} />
                        <label for="marginal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Marginal </label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="none" type="radio" value="none" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleRayClicked} />
                        <label for="none" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">None</label>
                    </div>
                </li>
            </ul>
          </div>
          {/* <Objects />          */}
          <div className='pt-10 pb-10  max-h-[250px] overflow-hidden'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Objek </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="principal" type="radio" value="garis" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="principal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Garis Lurus</label>
                    </div>
                </li>
                {/* <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="marginal" type="radio" value="gedung" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="marginal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Gedung</label>
                    </div>
                </li> */}
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="none" type="radio" value="persegi-panjang" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="none" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Persegi Panjang</label>
                    </div>
                </li>
            </ul>
          </div>
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

export default ConvexMirror;
