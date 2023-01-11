import React from 'react';
import './Dropdown.css';

const Dropdown = () => {

  const dd = document.querySelector('.dropdown');

  if(dd){
    const select = dd.querySelector('.select');
    const caret = dd.querySelector('.caret');
    const menu = dd.querySelector('.menu');
    const options = dd.querySelectorAll('.menu li');
    const selected = dd.querySelector('.selected');

    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;

        select.classList.remove('select-clicked');

        caret.classList.remove('caret-rotate');

        menu.classList.remove('menu-open');

        options.forEach(option => {
          option.classList.remove('active');
        });
        option.classList.add('active');
      })
    })
  }

  return (
    <div className='dropdown'>
      <div className='select'>
        <span className='selected'>Default</span>
        <div className='caret'></div>
      </div>
      <ul className='menu'>
        <li>moans</li>
        <li>screams</li>
        <li className='active'>moans</li>
        <li>cries</li>
        <li>muted</li>
      </ul>
    </div>
  )
}

export default Dropdown