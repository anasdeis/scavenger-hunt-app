import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Webcam from 'react-webcam';
import { Button } from '@mui/material';

import { setPicture } from '../../core/reducers/userSlice';

import './Camera.css';

const Camera = (props) => {
  const dispatch = useDispatch();
  const picture = useSelector((state) => state.user.picture);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    props.setOpenCamera(false);
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setPicture(imageSrc));
  }, [webcamRef]);

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {picture === '' ? (
        <Webcam height={300} width={300} ref={webcamRef}>
          {({ getScreenshot }) => (
            <div className="form-control-app">
              <div className="buttons-container">
                <Button variant="contained" onClick={capture}>
                  Prise
                </Button>
              </div>
            </div>
          )}
        </Webcam>
      ) : (
        <div className="form-control-app">
          <img className="user-picture" src={picture} />
          <div className="buttons-container">
            <Button variant="contained" onClick={() => dispatch(setPicture(''))}>
              Réessayer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Camera;
