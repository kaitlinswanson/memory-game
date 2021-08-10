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
      
      const randomNumber1 = randomIntFromInterval(0, 11)
      const memoryImage1 = imgData[randomNumber1];

      const randomNumber2 = randomIntFromInterval(0, 11)
      const memoryImage2 = imgData[randomNumber2];

      const randomNumber3 = randomIntFromInterval(0, 11)
      const memoryImage3 = imgData[randomNumber3];

      const randomNumber4 = randomIntFromInterval(0, 11)
      const memoryImage4 = imgData[randomNumber4];

      const randomNumber5 = randomIntFromInterval(0, 11)
      const memoryImage5 = imgData[randomNumber5];

      const randomNumber6 = randomIntFromInterval(0, 11)
      const memoryImage6 = imgData[randomNumber6];

      const randomNumber7 = randomIntFromInterval(0, 11)
      const memoryImage7 = imgData[randomNumber7];

      const randomNumber8 = randomIntFromInterval(0, 11)
      const memoryImage8 = imgData[randomNumber8];

      const randomNumber9 = randomIntFromInterval(0, 11)
      const memoryImage9 = imgData[randomNumber9];

      const randomNumber10 = randomIntFromInterval(0, 11)
      const memoryImage10 = imgData[randomNumber10];

      const randomNumber11 = randomIntFromInterval(0, 11)
      const memoryImage11 = imgData[randomNumber11];

      const randomNumber12 = randomIntFromInterval(0, 11)
      const memoryImage12 = imgData[randomNumber12];



return (
    <div className="card-container">
        <div className="cards" id="card-1">
            <img alt={memoryImage1.text} src={memoryImage1.img}></img>
        </div>
        <div className="cards" id="card-2">
            <img alt={memoryImage2.text} src={memoryImage2.img}></img>
        </div>
        <div className="cards" id="card-3">
            <img alt={memoryImage3.text} src={memoryImage3.img}></img>
        </div>
        <div className="cards" id="card-4">
            <img alt={memoryImage4.text} src={memoryImage4.img}></img>
        </div>
        <div className="cards" id="card-5">
            <img alt={memoryImage5.text} src={memoryImage5.img}></img>
        </div>
        <div className="cards" id="card-6">
            <img alt={memoryImage6.text} src={memoryImage6.img}></img>
        </div>
        <div className="cards" id="card-7">
            <img alt={memoryImage7.text} src={memoryImage7.img}></img>
        </div>
        <div className="cards" id="card-8">
            <img alt={memoryImage8.text} src={memoryImage8.img}></img>
        </div>
        <div className="cards" id="card-9">
            <img alt={memoryImage9.text} src={memoryImage9.img}></img>
        </div>
        <div className="cards" id="card-10">
            <img alt={memoryImage10.text} src={memoryImage10.img}></img>
        </div>
        <div className="cards" id="card-11">
            <img alt={memoryImage11.text} src={memoryImage11.img}></img>
        </div>
        <div className="cards" id="card-12">
            <img alt={memoryImage12.text} src={memoryImage12.img}></img>
        </div>
    </div>


)
    
}

export default CardGrid;