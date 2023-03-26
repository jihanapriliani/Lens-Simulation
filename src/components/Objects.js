import React from 'react'

export default function Objects() {


  const handleObjectClicked = () => {}


  return (
    <div className='pt-10 pb-10  max-h-[250px] overflow-hidden'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Objek </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="principal" type="radio" value="garis" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="principal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Garis Lurus</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="marginal" type="radio" value="gedung" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="marginal" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Gedung</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg">
                    <div class="flex items-center pl-3">
                        <input id="none" type="radio" value="persegi-panjang" name="list-object" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={handleObjectClicked} />
                        <label for="none" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Persegi Panjang</label>
                    </div>
                </li>
            </ul>
    </div>
  )
}
