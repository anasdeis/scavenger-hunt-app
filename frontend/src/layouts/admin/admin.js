import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Button } from '@mui/material';

import { Initialize } from '../../core/actions/Discover.action';
import { RequestGetUserListAll } from '../../core/actions/gameContext.action';
import RankRow from '../stage/carousel/ranking/rank-row';

import Modale from './modale/modale';
import Timer from './timer/timer';

import './admin.scss';

function Admin(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RequestGetUserListAll());
    setInterval(() => {
      dispatch(RequestGetUserListAll());
    }, 5000);
  }, []);

  var play = useSelector((state) => state.gameControl.play);
  var partyEnded = useSelector((state) => state.gameControl.endGame);
  var [open, setOpen] = useState(false);
  var endDate = useSelector((state) => state.gameControl.endDate);
  var userList = useSelector((state) => state.slider.userList);

  const reset = () => {
    dispatch(Initialize());
  };

  return (
    <div className="admin-container">
      <Modale open={open} setOpen={setOpen} play={true} />

      <div className="form-container">
        <div className="header-admin">
          <img
            className="logo-cgi"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/2560px-CGI_logo.svg.png"
          />
          <div className="admin-title">
            <AdminPanelSettingsIcon className="admin-pictogram" />
            <div>Compte administrateur</div>
          </div>
        </div>

        <br />
        <br />

        {play && !partyEnded && (
          <div className="timer">
            {endDate != undefined && endDate != null && endDate != '' && <Timer date={endDate} />}
          </div>
        )}

        <div className="actions-container">
          {
            <div>
              <div className="action-item">
                <div className="d-flex align-items-center justify-content-center">
                  <RocketLaunchIcon className="action-item-img" />
                  <div className="action-item-text">Réinitialiser la partie</div>
                </div>
                <Button onClick={() => reset()} className="button-violet-cgi" variant="contained">
                  Réinitialiser
                </Button>
              </div>
              {!play && !partyEnded && (
                <div className="action-item">
                  <div className="d-flex align-items-center justify-content-center">
                    <RocketLaunchIcon className="action-item-img" />
                    <div className="action-item-text">Démarrer la partie</div>
                  </div>
                  <Button onClick={() => setOpen(true)} className="button-violet-cgi" variant="contained">
                    Démarrer
                  </Button>
                </div>
              )}
            </div>
          }

          {play && !partyEnded && (
            <div className="action-item">
              <div className="d-flex align-items-center justify-content-center">
                <DriveFileRenameOutlineIcon className="action-item-img" />
                <div>
                  <div className="action-item-text">Modifier la date</div>
                  <div
                    className="action-item-text "
                    style={{ color: 'var(--redCgi)', fontWeight: '900', fontSize: '15px' }}
                  >
                    {endDate}
                  </div>
                </div>
              </div>
              <Button className="button-violet-cgi" onClick={() => setOpen(true)} variant="contained">
                Modifier
              </Button>
            </div>
          )}
        </div>
        <div style={{ color: 'black', paddingLeft: '20px', fontSize: '18px' }}>
          Total des utilisateurs inscrits : {userList.length}
        </div>

        <div className="participants-container">
          {userList.map((user, idx) => {
            return <RankRow total={userList.length} index={idx} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
