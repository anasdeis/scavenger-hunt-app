import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RequestGetTentatives } from '../../core/actions/Discover.action';
import { RequestGetUserListAll } from '../../core/actions/gameContext.action';
import TemptationResult from '../stage/carousel/Attempts/TemptationResult';

import Event from './Event/Event';
import RowEvent from './row-event/row-event';
import Waiting from './Waiting/waiting';
import video from './motion.mp4';

import './dashboard.scss';

function Dashboard(props) {
  const [waiting, setWaiting] = useState(false);
  const showDiscoverAnimation = useSelector((state) => state.gameContext.showDiscoverAnimation);
  const tentatives = useSelector((state) => state.gameContext.tentatives);
  const userList = useSelector((state) => state.slider.userList);
  const dispatch = useDispatch();
  const options = [
    {
      value: 1,
      label: 'TOP 3 - Points'
    },
    {
      value: 2,
      label: 'TOP 3 - Coups ratés'
    },
    {
      value: 3,
      label: 'TOP 3 - Peu engagé'
    }
  ];
  const [option, setOption] = useState(options[0]);

  // RequestGetTentatives
  useEffect(() => {
    dispatch(RequestGetTentatives());
    dispatch(RequestGetUserListAll());
    const interval = setInterval(() => {
      dispatch(RequestGetTentatives());
      dispatch(RequestGetUserListAll());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      switch (option.value) {
        case 1:
          setOption(options[1]);
          break;
        case 2:
          setOption(options[2]);
          break;
        case 3:
          setOption(options[0]);
          break;
        default:
          setOption(options[0]);
      }
    }, 30000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [option]);

  return (
    <div className="dashboard-scene">
      <TemptationResult component={<Event />} open={showDiscoverAnimation} />

      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>

      <div className="content">
        {waiting && <Waiting />}

        <div className="ranking">
          <div className="selectOptions">{option.label}</div>
          {option.value === 1
            ? [...userList]
                ?.sort((a, b) => b.nbFound - a.nbFound)
                .slice(0, 3)
                .map((user, idx) => {
                  return (
                    <div className="ranking-row">
                      <div className="rank-side" style={{ fontSize: '3vw', fontWeight: '600' }}>
                        {'#' + parseInt(idx + 1)}
                      </div>
                      <div className="avatar-user">
                        <img
                          className="avatar-user"
                          src={
                            user.picture === '' || user.picture === null
                              ? 'https://ui-avatars.com/api/?name=' + user.completeName
                              : user.picture
                          }
                        />
                      </div>
                      <div className="nom-complet">{user.completeName}</div>
                      <div className="stat-side">{user.nbFound}</div>
                    </div>
                  );
                })
            : option.value === 2
              ? [...tentatives]
                  ?.map((t) => ({
                    ...t,
                    count: 0
                  }))
                  .filter((t) => !t.trouve)
                  .reduce((acc, curr) => {
                    curr.count = 1;
                    const exists = acc.find((o) => o.id === curr.id);
                    exists ? exists.count++ : acc.push(curr);
                    return acc;
                  }, [])
                  .map((t) =>
                    Object.assign(
                      { count: t.count },
                      [...userList]?.find((u) => u.id == t.id)
                    )
                  )
                  .sort((a, b) => a.count - b.count)
                  .slice(0, 3)
                  .map((user, idx) => {
                    return (
                      <div className="ranking-row">
                        <div className="rank-side" style={{ fontSize: '3vw', fontWeight: '600' }}>
                          {'#' + parseInt(idx + 1)}
                        </div>
                        <div className="avatar-user">
                          <img
                            className="avatar-user"
                            src={
                              user.picture === '' || user.picture === null
                                ? 'https://ui-avatars.com/api/?name=' + user.completeName
                                : user.picture
                            }
                          />
                        </div>
                        <div className="nom-complet">{user.completeName}</div>
                        <div className="stat-side">{user.count}</div>
                      </div>
                    );
                  })
              : [...userList]
                  ?.filter((u) => ![...tentatives]?.find((t) => u.id === t.id))
                  .map((u) => ({
                    ...u,
                    count: 0
                  }))
                  .concat(
                    [...tentatives]?.reduce((acc, curr) => {
                      const t = curr.count ? curr : Object.assign({ count: 1 }, curr);
                      const exists = acc.find((o) => o.id === t.id);
                      exists ? exists.count++ : acc.push(t);
                      return acc;
                    }, [])
                  )
                  .map((t) =>
                    Object.assign(
                      { count: t.count },
                      [...userList]?.find((u) => u.id == t.id)
                    )
                  )
                  .sort((a, b) => a.count - b.count)
                  .slice(0, 3)
                  .map((user, idx) => {
                    return (
                      <div className="ranking-row">
                        <div className="rank-side" style={{ fontSize: '3vw', fontWeight: '600' }}>
                          {'#' + parseInt(idx + 1)}
                        </div>
                        <div className="avatar-user">
                          <img
                            className="avatar-user"
                            src={
                              user.picture === '' || user.picture === null
                                ? 'https://ui-avatars.com/api/?name=' + user.completeName
                                : user.picture
                            }
                          />
                        </div>
                        <div className="nom-complet">{user.completeName}</div>
                        <div className="stat-side">{user.count}</div>
                      </div>
                    );
                  })}
        </div>

        <div className="row-event-container">
          {tentatives.map((item) => {
            return <RowEvent trouve={item.trouve} nomComplet1={item.nomComplet1} nomComplet2={item.nomComplet2} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
