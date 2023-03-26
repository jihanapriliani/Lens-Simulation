import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getDistanceReflection, getSizeReflection } from './utils/Reflections';

import Header from './components/Header';
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

  const decounceDistanceHandler = useCallback(
    debounce(handleDistanceSlider, 5)
  , []);
  
  const decounceHeightHandler = useCallback(
    debounce(handleHeightSlider, 5)
  , []);

  const decounceFocusHandler = useCallback(
    debounce(handleFocusSlider, 5)
  , []);

  return (
    <div className="h-[100vh] bg-sky-100">
      <div className='flex justify-center items-center'>

        <div className="m-10 drop-shadow-lg">
            <div class="inline-flex rounded-md shadow-sm mb-3">
              <a to="/concave" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" relative='path'>
                Cermin Cekung
              </a>
              <a to="/" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" relative='path'>
                Lensa Cembung
              </a>
            </div>


            <div className='p-6 bg-slate-100'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<ConvexGraph width={CANVAS_WIDTH} height={CANVAS_HEIGHT} size={heigth} distance={distance} focus={focus} />} />
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

        {/* input ukuran objek dan jarak objek */}
        <div className='rounded-lg drop-shadow-xl'>
          <div className='px-10 pt-10 pb-10'>
              <div className="flex justify-between mb-9">
                <label for="tinggi_objek" className=" pt-3 text-sm font-medium text-gray-900 dark:text-white">Tinggi Objek : </label>
                <input type="number" id="tinggi_objek" className="ml-3 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={heigth} max={CANVAS_HEIGHT / 2} required/>
              </div>
              <div className="flex justify-between mb-9">
                <label for="jarak_benda" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Jarak Objek : </label>
                <input  type="number" id="jarak_benda" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={distance} max={CANVAS_WIDTH / 2} required/>
              </div>
              <div className="flex justify-between mb-9">
                <label for="fokus_lensa" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Titik Fokus : </label>
                <input type="number" id="fokus_lensa" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={focus} max={150} required/>
              </div>
          
              <hr className='my-8'/>

              <div className="flex justify-between mb-9">
                <label for="fokus_lensa" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Tinggi Bayangan  : </label>
                <input type="number" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={size_} disabled/>
              </div>

              <div className="flex justify-between mb-9">
                <label for="fokus_lensa" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Jarak Bayangan : </label>
                <input type="number" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={distance_} disabled/>
              </div>

          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
