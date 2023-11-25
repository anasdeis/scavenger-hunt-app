import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import cgiLogo from '../../core/statics/cgi.png';

import Camera from './Camera';

import './signin.scss';

function Page3(props) {
  const [openCamera, setOpenCamera] = useState(true);
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(true);
  const PICTURE_URL =
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png';

  useEffect(() => {
    setDisabled(formValidation());
  }, [props.picture]);

  const formValidation = () => {
    if (props.picture == '' || props.picture == null || props.picture == PICTURE_URL) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="form-container">
      <div style={{ marginBottom: '20px' }} className="cgi-logo">
        <img src={cgiLogo} />
      </div>
      <Camera setPage={props.setPage} setOpenCamera={setOpenCamera} />

      <div className="form-control-app">
        <div className="button-container">
          <Button className="m-2" variant="contained" onClick={() => props.setPage(2)}>
            Précédant
          </Button>
          <Button disabled={isDisabled} variant="contained" onClick={() => props.setPage(4)}>
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
