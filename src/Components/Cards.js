import React from 'react'
import './Cards.css'
import { Container } from 'reactstrap'

const Cards = () => {

  const file_in = document.getElementById("file-in");
  const file_btn = document.getElementById("input-btn");
  const file_name = document.getElementById("in-text");

  if(file_btn){
    file_btn.addEventListener("click", function(){
      file_in.click();
    })
  }
  
  if(file_in){
    file_in.addEventListener("change", function(){
      if(file_in.value){
        file_name.innerText = file_in.value;
      }else{
        file_name.innerText = "Drag & Drop to Upload File";
      }
    })
  }
  
  return (
    <Container className='card-cont'>
      <div className='sec1'>
        <div className='label'>
          <h3>Import Text file</h3>
          <small>Upload a txt file to covert text into speech</small>
        </div>

        <div className='or'>
          <hr size="2" width="100%" color="gray"/> 
        </div>

        <div className='import-local'>

          <div className='local-label'>
            <small>Import a local file from your computer</small>
          </div>

          <div className='local-cont'>

            <div className="drag-area">
              <div className="icon"></div>
              <span id='in-text'>Drag & Drop to Upload File</span>
              <span>OR</span>
              <button id='input-btn'>Browse</button>
              <input id='file-in' type="file" hidden  accept='.docx, .doc, .txt'/>
            </div>

          </div>

        </div>

        <div className='button-div'>
          <div className='dis-btn'>
            <button>Discard</button>
          </div>
          <div className='up-btn'>
            <button>Upload</button>
          </div>

        </div>
      </div>
{/* -----------------------------------second card from here ------------------------------------------------- */}
      <div className='sec1'>
        <div className='label'>
          <h3>Import Image file</h3>
          <small>Upload a image file to covert text into speech</small>
        </div>

        <div className='or'>
          <hr size="2" width="100%" color="gray"/> 
        </div>

        <div className='import-local'>

          <div className='local-label'>
            <small>Import a local file from your computer</small>
          </div>

          <div className='local-cont'>

            <div className="drag-area">
              <div className="icon"></div>
              <span id='in-text'>Drag & Drop to Upload File</span>
              <span>OR</span>
              <button id='input-btn'>Browse</button>
              <input id='file-in' type="file" hidden/>
            </div>

          </div>

        </div>

        <div className='button-div'>
          <div className='dis-btn'>
            <button>Discard</button>
          </div>
          <div className='up-btn'>
            <button>Upload</button>
          </div>

        </div>
      </div>
    </Container>
  )
  
}

export default Cards