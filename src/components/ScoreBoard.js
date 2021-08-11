import React from 'react';

const ScoreBoard = ({count}) => {




return (
    <div className="score-board">
        <div id="score">Score:{count}</div>
        <div id="top-score">Best Score:{count}</div>
    </div>
);
 };


 export default ScoreBoard;