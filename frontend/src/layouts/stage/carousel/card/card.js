import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import QrReaderComponent from './QrReaderComponent';

import './card.scss';

function Card(props) {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.slider.selectedUser);
  const userList = useSelector((state) => state.slider.userList);
  const [data, setData] = useState('No result');

  return (
    <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
      <div>
        <div className="card-container p-4">
          <div className="quote-text">
            {userList.find((u) => u.id == selectedUser) ? (
              userList.find((u) => u.id == selectedUser)?.funFact
            ) : (
              <div style={{ fontWeight: '600' }}>Sélectionnez un utilisateur pour afficher son fait amusant !</div>
            )}
          </div>
          {!userList.find((u) => u.id == selectedUser)?.discovered && selectedUser != '-1' && (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Button
                onClick={() => props.hadleClick(!props.isFlipped)}
                style={{ marginBottom: '20px' }}
                variant="contained"
              >
                Identifier
              </Button>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="card-container">{props.isFlipped && <QrReaderComponent hadleClick={props.hadleClick} />}</div>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
