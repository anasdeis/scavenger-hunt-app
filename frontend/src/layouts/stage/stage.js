import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGameControlRequest, getUsersList } from '../../core/actions/gameContext.action';
import EndGame from '../end-game/end-game';
import LoadingScreen from '../stage/start-screen/loadingScreen';

import Hit from './carousel/Attempts/Hit';
import Miss from './carousel/Attempts/Miss';
import TemptationResult from './carousel/Attempts/TemptationResult';
import Carousel from './carousel/carousel';
import Header from './header/header';
import Profile from './profil-stage/profile';
import QrDisplay from './qr-display/qr-display';

import './stage.scss';

function Stage(props) {
  var play = useSelector((state) => state.gameControl.play);
  var hit = useSelector((state) => state.gameControl.hit);
  var endGame = useSelector((state) => state.gameControl.endGame);
  var miss = useSelector((state) => state.gameControl.miss);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameControlRequest());
    dispatch(getUsersList());
    setInterval(() => {
      dispatch(getUsersList());
      dispatch(getGameControlRequest());
    }, 50000);
  }, []);

  return (
    <div className="stage-container">
      {endGame && !play ? (
        <EndGame />
      ) : play ? (
        <div>
          <QrDisplay />
          <div id="style-2" className="stage " style={{ marginBottom: '20px' }}>
            <Header />
            <br />
            <Profile />
            <br />
            <div style={{ textAlign: 'center' }}>Essayez d'identifier vos collègues</div>
            <Carousel />
            <br />
          </div>
          <TemptationResult component={<Hit />} open={hit} />
          <TemptationResult component={<Miss />} open={miss} />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Stage;
