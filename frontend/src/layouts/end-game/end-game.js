import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrophyOutlined } from '@ant-design/icons';

import { RequestGetUserListAll } from '../../core/actions/gameContext.action';
import RankRow from '../stage/carousel/ranking/rank-row';

import './end-game.scss';

function EndGame(props) {
  const dispatch = useDispatch();
  var userList = useSelector((state) => state.slider.userList);

  useEffect(() => {
    dispatch(RequestGetUserListAll());
    setInterval(() => {
      dispatch(RequestGetUserListAll());
    }, 5000);
  }, []);

  return (
    <div className="admin-container-eog">
      <div className="end-of-game">
        <TrophyOutlined />
        <div>Fin de la partie</div>
      </div>
      {[...userList]
        ?.sort((a, b) => b.nbFound - a.nbFound)
        .map((user, index) => {
          return <RankRow id={'id-' + parseInt(1 + index)} total={userList.length} index={index} user={user} />;
        })}
    </div>
  );
}

export default EndGame;
