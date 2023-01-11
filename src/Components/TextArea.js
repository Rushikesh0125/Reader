import './TextArea.css';

import React from 'react'
import Dropdown from './Dropdown';

const TextArea = () => {
  return (
    <div className='cont'>
      <div className='text-area'>
        <textarea className='text-field' placeholder='Type text here'></textarea>
      </div>

      <div className='other-content'>
        <h3>Enter Text in textbox</h3>
        <h5>(upto 300 characters)</h5>
        <div className='drop-down'>
          <h4>Select Voices</h4>
          <select className='droplist' name="voice" id="voices">
            <option value="volvo">moans</option>
            <option value="saab">cries</option>
            <option value="mercedes">creams</option>
            <option value="audi">laughter</option>
          </select>
        </div>
        <div className='button-div'>
          <button className='btn'>Convert</button>
        </div>
      </div>
    </div>
  )
}

export default TextArea