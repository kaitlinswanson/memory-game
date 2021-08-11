import React, {useState} from 'react';
import './App.css';

//components 
//grid component
import CardGrid from './components/CardGrid.js'
//scoreboard component
import ScoreBoard from './components/ScoreBoard.js'



//win function for when score reaches 12 (if only 12 images)


function App() {

  //set states 
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

 function increaseScore() {
  setCount(prevCount => prevCount + 1)
 }

  function resetScore() {
  setCount(0)
  }

  function findHighScore(length) {
    if (highScore < length) {
    setHighScore(length)
  } else { 
    setHighScore(highScore)
  }
  }

  function checkWin(length) {
    if (length >= 12) { 
    document.getElementById('instructions').innerHTML="You Win!!!"
    } else { 
      return;
    }
  }


  return (
    <div className="App">
      <h1 className="header">Test Your Memory!</h1>
      <div id="instructions" className="instructions">How To Play&#58; Click on images to earn points. Remember which ones you've already selected! 
      <br></br>
      Click the same image twice and you have to start over! </div>
      <ScoreBoard 
         count={count}
         highScore={highScore}
         
         />
         
    <div  className="game-board">
    <CardGrid 
      increaseScore={increaseScore}
      resetScore={resetScore}      
      findHighScore={findHighScore} 
      checkWin={checkWin}      
    />
    </div>
    </div>
  );
}

export default App;
