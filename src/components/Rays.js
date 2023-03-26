import React from 'react'

export default function Rays(props) {

  const handleRayClicked = (e) => {
    console.log("tes")
  }


  return (
    <div className='pt-10 pb-10'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Jenis Pemantulan</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="principal" type="radio" value="principal" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e) => handleRayClicked}/>
                        <label for="principal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Principal</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="marginal" type="radio" value="marginal" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e)=> handleRayClicked} />
                        <label for="marginal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Marginal </label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="none" type="radio" value="none" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e)=>handleRayClicked} />
                        <label for="none" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">None</label>
                    </div>
                </li>
            </ul>
    </div>
  )
}
