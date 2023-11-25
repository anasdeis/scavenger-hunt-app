import React, { useState } from 'react';

import Card from './card/card';
import Slider from './slider/slider';

import './carousel.scss';

function Carousel(props) {
  const [isFlipped, hadleClick] = useState(false);

  return (
    <div className="carousel-container">
      <div className="slider-container">
        <Slider flipCard={hadleClick} />
      </div>
      <div className="card-section">
        <Card isFlipped={isFlipped} hadleClick={hadleClick} />
      </div>
    </div>
  );
}

export default Carousel;
