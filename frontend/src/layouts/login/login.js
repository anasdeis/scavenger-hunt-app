import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import { loginRequest } from '../../core/actions/user.action';
import cgiLogo from '../../core/statics/cgi.png';

import './login.scss';

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = () => {
    dispatch(loginRequest(email, password, navigateFunction));
  };
  const navigateFunction = () => {
    navigate('/stage');
  };
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(formValidation());
  }, [email, password]);

  const formValidation = () => {
    if (email == '' || email == null || password == '' || password == null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="cgi-logo">
          <img src={cgiLogo} />
        </div>
        <div className="login-placeholder-text">
          Connectez-vous pour profiter du jeu ! Pas encore inscrit ?<a href="/signin"> Créer un compte.</a>
        </div>
        <br />
        <div className="form-control-card">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-button-login"
            id="standard-basic"
            label="Pseudo"
            variant="standard"
            required
          />
          <br />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-button-login"
            id="standard-basic"
            label="Mot de passe"
            variant="standard"
            required
          />
          <div className="button-container">
            <Button disabled={isDisabled} variant="contained" onClick={() => onLogin()}>
              Connexion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
