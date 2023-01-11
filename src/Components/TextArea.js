import './TextArea.css';
import { PollyClient, DescribeVoicesCommand } from '@aws-sdk/client-polly';
import React from 'react'
// import Dropdown from './Dropdown';



const TextArea = () => {

  // document.addEventListener("DOMContentLoaded", function () {
  //   const drop = document.getElementById("voices");
  //   const CREDENTIAL = {
  //     accessKeyId: 'AKIAVAVAFTIN26HD4EHB',
  //     secretAccessKey: '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',
  //   };
  //   const polly = new PollyClient({
  //     region: 'ap-south-1',
  //     credentials: CREDENTIAL,
  //   });
  //   var params = {
  //     // Engine: "standard",
  //     //IncludeAdditionalLanguageCodes: true,
  //     // NextToken: 'STRING_VALUE'
  //   };

  //   const run = async () => {
  //     try {
  //       var container = document.createDocumentFragment();
  //       const data = await polly.send(new DescribeVoicesCommand(params)).Voices;
  //       console.log(data)
  //       data.forEach(function (voice) {
  //         var option = document.createElement('option');
  //         option.value = voice['Id'];
  //         option.innerHTML = voice['Name'] + ' (' +
  //           voice['Gender'] + ', ' +
  //           voice['LanguageName'] + ')';
  //         container.appendChild(option);
  //       });
  //       drop.disabled = false;
  //       drop.appendChild(container);

  //     } catch (err) {
  //       console.log("Error putting object", err);
  //     }

  //   }
  // })




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
          <select className='droplist' name="voice" id="voices" disabled>
            <option value="">choose voice</option>
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