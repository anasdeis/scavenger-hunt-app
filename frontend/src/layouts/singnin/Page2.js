import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

import { setFunFact } from '../../core/reducers/userSlice';
import cgiLogo from '../../core/statics/cgi.png';

import './signin.scss';

function Page2(props) {
  const [openCamera, setOpenCamera] = useState(false);
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(formValidation());
  }, [props.funFact]);

  const formValidation = () => {
    if (props.funFact == '') {
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
        Partagez un fait amusant qui sera visible par tous vos collègues, soyez créatifs !
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <TextField
          style={{ width: '80%' }}
          placeholder="fun fact !"
          multiline
          rows={4}
          maxRows={4}
          value={props.funFact}
          onChange={(e) => dispatch(setFunFact(e.target.value))}
          id="standard-basic"
          label="Dites-nous tout !"
          variant="standard"
          required
        />
      </div>

      <div className="form-control-app">
        <div className="button-container">
          <Button className="m-2" variant="contained" onClick={() => props.setPage(1)}>
            Précédant
          </Button>
          <Button disabled={isDisabled} variant="contained" onClick={() => props.setPage(3)}>
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
