import React from 'react';
import QRCode from 'react-qr-code';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import { setShowQr } from '../../../core/reducers/gameContextSlice';
import logoCgi from '../../../core/statics/cgi.png';

import './header.scss';
function Header(props) {
  const dispatch = useDispatch();
  var user = JSON.parse(sessionStorage.getItem('user'));
  const userList = useSelector((state) => state.slider.userList);
  const showQr = useSelector((state) => state.gameContext.showQr);
  var SIZE = Math.round((userList.filter((u) => u.discovered).length / userList.length) * 100);

  return (
    <div className="header-stage">
      <div>
        <img src={logoCgi} className="logo-cgi-header" />
      </div>

      <div className="classement">
        {!showQr ? (
          <QRCode
            style={{ padding: '10px' }}
            onClick={() => dispatch(setShowQr(!showQr))}
            size={50}
            value={user.email}
            bgColor={'white'}
            fgColor={'black'}
            className="HandButton"
          />
        ) : (
          <div style={{ paddingTop: '10px' }}>
            <Progress
              className="HandButton"
              onClick={() => dispatch(setShowQr(!showQr))}
              size={50}
              type="circle"
              percent={SIZE}
              strokeColor={{ '0%': 'var(--violetCgi)', '100%': 'var(--redCgi)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
