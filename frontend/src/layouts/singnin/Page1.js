import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

import { setEmail, setFirstName, setLastName, setPassword } from '../../core/reducers/userSlice';
import cgiLogo from '../../core/statics/cgi.png';

import './signin.scss';

function Page1(props) {
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(formValidation());
  }, [props.firstName, props.lastName, props.email, props.password]);

  const formValidation = () => {
    if (props.firstName == '' || props.lastName == '' || props.email == '' || props.password == '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="form-container">
      <div className="cgi-logo">
        <img src={cgiLogo} />
      </div>
      <div className="login-placeholder-text">
        Inscrivez-vous afin de profiter du jeu ! Déjà inscrit ?<a href="/"> Connectez-vous !</a>
      </div>
      <br />
      <div className="form-control-app">
        <TextField
          autocomplete="given-name"
          value={props.firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}
          className="input-button-login"
          id="standard-basic"
          label="Prénom"
          variant="standard"
          required
        />
        <br />
        <TextField
          autocomplete="family-name"
          value={props.lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
          className="input-button-login"
          id="standard-basic"
          label="Nom"
          variant="standard"
          required
        />
        <br />
        <TextField
          type="email"
          autocomplete="email"
          value={props.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className="input-button-login"
          id="standard-basic"
          label="Pseudo"
          variant="standard"
          required
        />
        <br />
        <TextField
          type="password"
          value={props.password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className="input-button-login"
          id="standard-basic"
          label="Mot de passe"
          variant="standard"
          required
        />
        <div className="button-container">
          <Button disabled={isDisabled} variant="contained" onClick={() => props.setPage(2)}>
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
