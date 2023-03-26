import React, {useState} from 'react';


export default function Slider(props) {

  const {maxValue, defaultValue, onChange, title} = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    onChange(event);
    setValue(event.target.value);
  }


  return (
    <div>
        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
        <input id="medium-range" min={0} max={maxValue} type="range" value={value} 
            onChange={handleChange} 
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    </div>
  )
}
