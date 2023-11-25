import React from 'react';

import './waiting.css';
function Waiting(props) {
  return (
    <div className="loading-game">
      <div className="circle">
        <div className="borderCircle"></div>
        <div className="borderCircle2"></div>
        <div className="borderCircle3"></div>
        <div className="innerCircle">
          <p>Waiting for the administrator to start the game</p>
        </div>
        <div className="outerCirlce"></div>
      </div>
    </div>
  );
}

export default Waiting;
