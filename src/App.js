import React from 'react';
import './App.css';

import Graphics from './components/Graphics';

function App() {
  return (
    <div className="h-screen bg-sky-100 ">
      <div className="border-l border-sky-500">
        <nav className="bg-gradient-to-r from-cyan-300 to-blue-300 px-2 sm:px-4 py-2.5 h-20 ">
            <div className="mt-0.5 ">
              <p className=" text-4xl font-sans ">Simulasi Lensa Cembung</p>
            </div>
        </nav>
      </div>

      <div className='flex'>
        <div className='bg-white rounded-lg drop-shadow-xl mt-10 ml-48 w-[1150px] h-[750px]' >
          {/* <div className='flex'>
            <div className='bg-white mt-10'>
              <input id="default-range" type="range" value="50" class="w-[450px] h-2  ml-32 bg-sky-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            </div>

            <div className='bg-white mt-10'>
              <input id="default-range" type="range" value="50" class="w-[450px] h-2  ml-0 bg-sky-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            </div>

            
          </div> */}

          {/* <div className='bg-white mt-1'>
              <input id="default-range" type="range" value="50" class="w-[900px] h-2  ml-32 bg-sky-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
          </div> */}

           {/* diagram kartesius */}
          <div className=" w-[900px] h-[500px] border border-sky-900 bg-slate-100 mt-28 ml-32 ">
            <Graphics width={900} height={500}/>
          </div>

          {/* Hasil jarak bayangan dan ukuran bayangan */}
          <div classname='bg-white mt-48 ml-32  h-[200px] rounded-lg drop-shadow-2xl'>
            <div className='pl-32 pt-10 pb-10'>
                <form className='flex'>
                  <div className="flex mb-6">
                    <label for="jarak_bayangan" className=" pt-3 text-sm font-medium text-gray-900 dark:text-white">Jarak Bayangan : </label>
                    <input type="text" id="jarak_bayangan" className="h-11 ml-3 bg-sky-50 border border-blue-400 text-gray-900 text-sm rounded-lg  block w-32 p-2.5 " readOnly/>
                  </div>
                  <div className="flex ml-10 mb-9">
                    <label for="ukuran_bayangan" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Ukuran Bayangan : </label>
                    <input type="text" id="ukuran_bayangan" className="h-11 ml-6 bg-sky-50 border border-blue-400 text-gray-900 text-sm rounded-lg  block w-32 p-2.5 " readOnly/>
                  </div>
                </form>
            </div>
          </div>
        </div>

        {/* input ukuran objek dan jarak objek */}
        <div className='bg-white mt-10 ml-10 w-80 h-[270px] rounded-lg drop-shadow-xl'>
          <div className='pl-10 pt-10 pb-10'>
            <form>
              <div className="flex mb-6">
                <label for="ukuran_objek" className=" pt-3 text-sm font-medium text-gray-900 dark:text-white">Ukuran Objek : </label>
                <input type="text" id="ukuran_objek" className="ml-3 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div className="flex mb-9">
                <label for="jarak_benda" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Jarak Objek : </label>
                <input type="text" id="jarak_benda" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div className=''>
                <button type="submit" class="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>


   
    </div>
    
  );
}

export default App;
