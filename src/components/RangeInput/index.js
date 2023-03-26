import React, { useState } from 'react';

import './index.css';

export default function RangeInput() {

  const [value, setValue] = useState(50);

  const handleRangeSlider = (event) => {
    setValue(event.target.value);
  }


  return (
    <div class="flex items-center">
        <input class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={handleRangeSlider} type="range" value={value} min="0" max="500" />
        <span class="range-slider__value">Jarak<br />{value}</span>
    </div>
  )
} 
