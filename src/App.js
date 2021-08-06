import React from 'react';
import './App.css';
//components 
//grid component
import CardGrid from './components/CardGrid.js'

//scoreboard component



//generate a grid of 9 or 12 spaces 
//id of those spaces must identify with the image/card and not the space to see if it's been chosen twice

//add game instructions at the top left
//add a section for the score board - score and best score top right 

//randomly assign image cards to spaces 
//set it to regenerate after each click. useEffect with the dependancy changing for each click
//add counter + 1 if prev clicks on card === 0 and reset counter if it has a prev click 

//update scoreboard for "best score" every time counter resets - if new score is higher than prev best score, bestscore = new score

//win function for when score reaches 12 (if only 12 images)


function App() {
  return (
    <div className="App">Hello World
    <CardGrid />
    </div>
  );
}

export default App;
