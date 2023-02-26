import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Graphics from './components/Graphics';

function App() {
  const [heigth, setHeight] = useState(100);
  const [distance, setDistance] = useState(200);
  const [focus, setFocus] = useState(80);

  return (
    <div className="h-screen bg-sky-100">
      <Header />

      <div className='flex items-start'>
        <div className='bg-white rounded-lg drop-shadow-xl mt-10 ml-48 p-12' >
          <div className=" w-[1000px] h-[600px] border border-sky-900 bg-slate-100">
            <Graphics width={1000} height={600} size={heigth} distance={distance} focus={focus} />
          </div>
        </div>

        {/* input ukuran objek dan jarak objek */}
        <div className='bg-white mt-10 ml-10 w-80 rounded-lg drop-shadow-xl'>
          <div className='pl-10 pt-10 pb-10'>
            <form>
              <div className="flex mb-6">
                <label for="tinggi_objek" className=" pt-3 text-sm font-medium text-gray-900 dark:text-white">Tinggi Objek : </label>
                <input onChange={(e) => setHeight(parseInt(e.target.value))} type="number" id="tinggi_objek" className="ml-3 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={heigth} required/>
              </div>
              <div className="flex mb-9">
                <label for="jarak_benda" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Jarak Objek : </label>
                <input onChange={(e) => setDistance(parseInt(e.target.value))} type="number" id="jarak_benda" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={distance} required/>
              </div>
              <div className="flex mb-9">
                <label for="fokus_lensa" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Fokus Lensa : </label>
                <input onChange={(e) => setFocus(parseInt(e.target.value))} type="number" id="fokus_lensa" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={focus} required/>
              </div>
          
            </form>

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
