import React from 'react';

const ScoreBoard = ({count, highScore}) => {

//update scoreboard for "best score" every time counter resets - if new score is higher than prev best score, bestscore = new score


  

return (
    <div className="score-board">
        <div id="score">Score:{count}</div>
        <div id="top-score">Best Score:{highScore}</div>
    </div>
);
 };


 export default ScoreBoard;