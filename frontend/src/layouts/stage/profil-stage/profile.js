import React from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import { Progress } from 'antd';

import './profile.scss';

function Profile(props) {
  const userList = useSelector((state) => state.slider.userList);
  var user = JSON.parse(sessionStorage.getItem('user'));
  const showQr = useSelector((state) => state.gameContext.showQr);
  var SIZE = Math.round((userList.filter((u) => u.discovered).length / (userList.length - 1)) * 100);

  return (
    <div className="profil-container">
      <div className="content-area">
        {showQr ? (
          <QRCode
            // value={btoa(user.email)}
            value={user.email}
            bgColor={'white'}
            // fgColor={'var(--redCgi)'}
            fgColor={'black'}
          />
        ) : (
          <Progress
            size={250}
            type="circle"
            percent={SIZE}
            strokeColor={{ '0%': 'var(--violetCgi)', '100%': 'var(--redCgi)' }}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
