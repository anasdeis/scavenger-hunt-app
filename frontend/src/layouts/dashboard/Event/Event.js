import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useDispatch } from 'react-redux';

import './Event.scss';
function Event(props) {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(true);
  const [tentative, setTentative] = useState({ id: 0, user1: {}, user2: {}, trouve: false });

  return (
    <div className=" " style={{ width: '800px', textAlign: 'center' }}>
      <ConfettiExplosion
        style={{ marginLeft: '200px' }}
        force={0.8}
        width={1600}
        particleCount={250}
        duration={3000}
        particleSize={20}
        zIndex={99999}
      />
      <div className="discover-text">
        {tentative.user1?.completeName + ' a découvert : ' + tentative.user2?.completeName}
      </div>
      <div className={'text-animation ' + animate}>
        <img className="user-picture1" src={tentative.user1?.picture} />
        <img className="user-picture2" src={tentative.user2?.picture} />
      </div>
    </div>
  );
}

export default Event;
