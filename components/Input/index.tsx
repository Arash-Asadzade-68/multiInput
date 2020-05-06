import React, { useState , useEffect , useRef } from 'react';
import { PropsTypes } from './types.d';
import Styles from './styles.scss'


const Input = ({ setValues , savedValue , valuesArrayLength, currentIndex , appendInput }: PropsTypes) => {
  const [value, setValue] = useState(savedValue);

  const onChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
    // Add input when typing in last input
    if((currentIndex+1)===valuesArrayLength)  appendInput();
  }

  // Set value of input to put in result array
  const onblur = () =>{
    if (value.length > 0)  setValues(value)
  }

  return (
    <div className={Styles.container}>
      <input
        type="text"
        className={Styles.input}
        required
        value={value}
        onBlur={() => onblur()}
        onChange={(e) => onChange(e)} />
      <span className={Styles.label}>test attribute</span>
    </div>
  )
}
export default Input;