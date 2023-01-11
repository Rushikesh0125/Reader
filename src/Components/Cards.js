import React from 'react'
import './Cards.css'
import { Container } from 'reactstrap'
import {FcDocument} from 'react-icons/fc';

const Cards = (props) => {

  const {label, smol, type, accept} = props.item;

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
        file_name.innerText = file_in.value.name;
      }else{
        file_name.innerText = "Drag & Drop to Upload File";
      }
    })
  }

  // drag area stuff
  const dropArea = document.querySelector(".drag-area");
  let file;

  if(dropArea){
    let dragtext = dropArea.querySelector("span");
    let dragsmol = dropArea.querySelector("small");
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
      console.log("dragged over")
      dropArea.classList.add("active");
      dragtext.textContent = "Release file for upload";
    })
    dropArea.addEventListener("dragleave", () => {
      console.log("leaved area");
      dropArea.classList.remove("active");
      dragtext.textContent = "Drag & Drop to Upload File"
    })
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      file = event.dataTransfer.files[0];
      let fileType = file.type;
  
      let valid = accept;
      if(valid.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = () =>{
          let filUrl = fileReader.result;
        }
        // if(fileReader){
        //   dragtext.textContent = file.name;
        //   dragsmol.textContent = file.size/1000 + "Kb";
        // }
        fileReader.readAsDataURL(file);
      }else{
        alert("Jaaa naa Lavde");
        dropArea.classList.remove("active");
        dragtext.textContent = "Drag & Drop to Upload File"
      }
    })
  }
  
  return <div className='sec1'>
        <div className='label'>
          <h3>{label}</h3>
          <small>{smol}</small>
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
              <small>or</small>
              <button id='input-btn'>Browse</button>
              <input id='file-in' type="file" hidden  accept= {type}/>
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
  
}

export default Cards