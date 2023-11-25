import React from 'react';
import { Button, TextField } from '@mui/material';

import cgiLogo from '../../core/statics/cgi.png';

import './signin.scss';

function Page4(props) {
  return (
    <div className="form-container">
      <div className="cgi-logo">
        <img src={cgiLogo} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        <img
          className="user-picture"
          src={props.picture != '' ? props.picture : PICTURE_URL}
          style={{ height: '200px', width: '200px' }}
        />
      </div>
      <br />
      <div className="form-control-app">
        <TextField
          disabled
          defaultValue={`${props.firstName} ${props.lastName}`}
          className="input-button-login"
          id="standard-disabled"
          label="Nom complet"
          variant="standard"
        />
        <br />
        <TextField
          disabled
          defaultValue={props.email}
          className="input-button-login"
          id="standard-disabled"
          label="Pseudo"
          variant="standard"
        />
        <br />
        <TextField
          disabled
          defaultValue={props.funFact}
          className="input-button-login"
          id="standard-disabled"
          label="Fait amusant"
          variant="standard"
        />
        <div className="button-container">
          <Button className="m-2" variant="contained" onClick={() => props.setPage(3)}>
            Précédant
          </Button>
          <Button variant="contained" onClick={() => props.login()}>
            Créer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page4;
