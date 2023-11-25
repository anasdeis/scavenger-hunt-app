import React from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import './row-event.scss';
function RowEvent(props) {
  return (
    <div className="row-event">
      <div className="signe">
        {!props.trouve ? (
          <DangerousIcon style={{ color: 'red', fontSize: '2vw' }} />
        ) : (
          <ThumbUpAltIcon style={{ color: 'green', fontSize: '2vw' }} />
        )}
      </div>
      <div className="message">
        <b style={{ color: 'white' }}>{props.nomComplet1 + ' '} </b> {!props.trouve ? 'a raté son coup' : 'a découvert'}{' '}
        <b style={{ color: 'white' }}>{props.trouve && ' ' + props.nomComplet2}</b>
      </div>
    </div>
  );
}

export default RowEvent;
