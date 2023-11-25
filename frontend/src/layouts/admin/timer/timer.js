import React from 'react';
import { useDispatch } from 'react-redux';
import { Statistic } from 'antd';
import moment from 'moment';

import { RequestUpdateGameplay } from '../../../core/actions/gameContext.action';

import './timer.scss';

const Completionist = () => <span>The game is over ! </span>;

function Timer(props) {
  const { Countdown } = Statistic;
  const dispatch = useDispatch();

  let date = Date.parse(moment(props.date));
  const onFinish = () => {
    //do something about it
    dispatch(RequestUpdateGameplay(false, true, date));
  };

  return (
    <div className="countdown-container">
      <Countdown style={{ color: 'black' }} value={date} onFinish={() => onFinish()} />
    </div>
  );
}

export default Timer;
