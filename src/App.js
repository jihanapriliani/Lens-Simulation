import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getDistanceReflection, getSizeReflection } from './utils/Reflections';

import ConvexGraph from './components/ConvexGraph';
import Slider from './components/Slider';
import debounce from 'lodash.debounce';
import ConcaveGraph from './components/ConcaveGraph';


function App() {
  const [heigth, setHeight] = useState(100);
  const [distance, setDistance] = useState(200);
  const [focus, setFocus] = useState(80);

  const [distance_, setDistance_] = useState(-getDistanceReflection(distance, focus));
  const [size_, setSize_] = useState(getSizeReflection(distance, heigth, distance_));


  const [label, setLabel] = useState(false);

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

  return (
    <div className="h-[100vh] bg-sky-100">
      <div className='flex justify-center items-center'>

        <div className="m-10 drop-shadow-lg">
          
            <div className='p-6 bg-slate-100'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<ConvexGraph width={CANVAS_WIDTH} height={CANVAS_HEIGHT} size={heigth} distance={distance} focus={focus} hasLabel={label} />} />
                  <Route path='concave' element={<ConcaveGraph width={CANVAS_WIDTH} height={CANVAS_HEIGHT} size={heigth} distance={distance} focus={focus} />} />
                </Routes>
              </BrowserRouter>
            </div>
        </div>


        <div className='bg-white rounded-lg drop-shadow-lg m-10 p-12' >
      
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

        {/* input ukuran objek dan jarak objek */}
        <div className='rounded-lg drop-shadow-xl'>
          <div className='pt-10 pb-10'>

          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Rays</h3>
          <ul class="w-72 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                      <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marginal</label>
                  </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                      <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Principal</label>
                  </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                      <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Many</label>
                  </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                      <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">None</label>
                  </div>
              </li>
          </ul>

              

          </div>
        </div>

        <div class="flex items-center pl-3">
            <input id="label-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={handleLabelClicked} />
            <label for="label-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Label</label>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
