import React, { useState, useEffect } from 'react';
import { imgData } from './imageData.js';
import { generateRandom } from './generateRandom.js'

//components 

//generate a grid of 9 or 12 spaces 
//id of those spaces must identify with the image/card and not the space to see if it's been chosen twice

//randomly assign image cards to spaces 
//set it to regenerate after each click. useEffect with the dependancy changing for each click

const CardGrid = (props) => { 

    const [clickedCards, setClickedCards] = useState([]); 


    
//randomly assign image cards to spaces 
let newBoard = []

    function shuffleBoard() {
      
        newBoard = [];
        const newImage1 = imgData[generateRandom()]
        const newImage2 = imgData[generateRandom()]
        const newImage3 = imgData[generateRandom()]
        const newImage4 = imgData[generateRandom()]
        const newImage5 = imgData[generateRandom()]
        const newImage6 = imgData[generateRandom()]
        const newImage7 = imgData[generateRandom()]
        const newImage8 = imgData[generateRandom()]
        const newImage9 = imgData[generateRandom()]
        const newImage10 = imgData[generateRandom()]
        const newImage11 = imgData[generateRandom()]
        const newImage12 = imgData[generateRandom()]

        newBoard.push(newImage1, newImage2, newImage3, newImage4, newImage5, newImage6, newImage7, newImage8, newImage9, newImage10, newImage11, newImage12)

    }

    shuffleBoard()

    useEffect(() => {
        shuffleBoard();
      });


      function checkClicked(e) {
          if(!clickedCards.includes(e.target.id)) {
              setClickedCards((clickedCards) => [
                  ...clickedCards, 
                  (e.target.id), ]);
                  props.increaseScore();
              } else { 
                  props.resetScore();
                  setClickedCards([0])
              }
          }
      

     

   console.log(newBoard)

return (
    <div className="card-container">
        <div className="cards" id="card-1">
            <img  onClick={(e) => {checkClicked(e)}} className="images" id={newBoard[0].id} alt={newBoard[0].text} src={newBoard[0].img}></img>
        </div>
        <div className="cards" id="card-2">
            <img className="images" alt={newBoard[1].text} src={newBoard[1].img}></img>
        </div>
        <div className="cards" id="card-3">
            <img className="images" alt={newBoard[2].text} src={newBoard[2].img}></img>
        </div>
        <div className="cards" id="card-4">
            <img className="images" alt={newBoard[3].text} src={newBoard[3].img}></img>
        </div>
        <div className="cards" id="card-5">
            <img className="images" alt={newBoard[4].text} src={newBoard[4].img}></img>
        </div>
        <div className="cards" id="card-6">
            <img className="images" alt={newBoard[5].text} src={newBoard[5].img}></img>
        </div>
        <div className="cards" id="card-7">
            <img className="images" alt={newBoard[6].text} src={newBoard[6].img}></img>
        </div>
        <div className="cards" id="card-8">
            <img className="images" alt={newBoard[7].text} src={newBoard[7].img}></img>
        </div>
        <div className="cards" id="card-9">
            <img className="images" alt={newBoard[8].text} src={newBoard[8].img}></img>
        </div>
        <div className="cards" id="card-10">
            <img className="images" alt={newBoard[9].text} src={newBoard[9].img}></img>
        </div>
        <div className="cards" id="card-11">
            <img className="images" alt={newBoard[10].text} src={newBoard[10].img}></img>
        </div>
        <div className="cards" id="card-12">
            <img className="images" alt={newBoard[11].text} src={newBoard[11].img}></img>
        </div>
    </div>


)
    
}

export default CardGrid;