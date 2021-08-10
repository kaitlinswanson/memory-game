import React from 'react';
import { imgData } from './imageData.js';

//components 

//generate a grid of 9 or 12 spaces 
//id of those spaces must identify with the image/card and not the space to see if it's been chosen twice

//randomly assign image cards to spaces 
//set it to regenerate after each click. useEffect with the dependancy changing for each click

const CardGrid = () => { 


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const randomNumber = randomIntFromInterval(0, 11)
      const memoryImage = imgData[randomNumber];
      console.log(randomNumber);

return (
    <div className="card-container">
        <div className="cards" id="card-1">
            <img alt={memoryImage.text} src={memoryImage.img}></img>
        </div>
        <div className="cards" id="card-2"></div>
        <div className="cards" id="card-3"></div>
        <div className="cards" id="card-4"></div>
        <div className="cards" id="card-5"></div>
        <div className="cards" id="card-6"></div>
        <div className="cards" id="card-7"></div>
        <div className="cards" id="card-8"></div>
        <div className="cards" id="card-9"></div>
        <div className="cards" id="card-10"></div>
        <div className="cards" id="card-11"></div>
        <div className="cards" id="card-12"></div>
    </div>


)
    
}

export default CardGrid;