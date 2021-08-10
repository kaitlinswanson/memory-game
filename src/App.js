import React, { useState }from 'react';
import './App.css';
//components 
//grid component
import CardGrid from './components/CardGrid.js'

//scoreboard component





//add a section for the score board - score and best score top right 


//add counter + 1 if prev clicks on card === 0 and reset counter if it has a prev click 

//update scoreboard for "best score" every time counter resets - if new score is higher than prev best score, bestscore = new score

//win function for when score reaches 12 (if only 12 images)


function App() {

  //set states 

  const [image, setClicked] = useState("unclicked"); 
  //const [count, setCount] = useState(0);

  //useEffect(() => {
    //use onClick "checkClicked" for each div image
    //const checkClicked = () => {
    //  if (image === "unclicked") {
      //  setClicked("clicked");
      //  setCount(count + 1)
     // } else {
     //   setCounter("0");
     // }
   // };


  return (
    <div className="App">
      <h1 className="header">Test Your Memory!</h1>
      <div className="instructions">How To Play&#58; Click on images to earn points. Remember which ones you've already selected! 
      <br></br>
      Click the same image twice and you have to start over! </div>
    <div className="game-board">
    <CardGrid 
   image={image} 
   setClicked={setClicked}
    />
    </div>
    </div>
  );
}

export default App;
