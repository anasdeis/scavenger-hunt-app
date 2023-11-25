import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signinRequest } from '../../core/actions/user.action';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

import './signin.scss';

function Signin(props) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const unity = useSelector((state) => state.user.unity);

  const picture = useSelector((state) => state.user.picture);
  const funFact = useSelector((state) => state.user.funFact);

  const login = () => {
    dispatch(signinRequest(firstName, lastName, unity, email, password, picture, funFact, redirect));
    // navigate('/stage')
  };

  const redirect = () => {
    navigate('/stage');
  };

  return (
    <div className="page-container">
      {page === 1 ? (
        <Page1
          setPage={setPage}
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          unity={unity}
        />
      ) : page === 2 ? (
        <Page2 funFact={funFact} setPage={setPage} />
      ) : page === 3 ? (
        <Page3 picture={picture} setPage={setPage} />
      ) : (
        <Page4
          firstName={firstName}
          lastName={lastName}
          email={email}
          funFact={funFact}
          picture={picture}
          login={login}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Signin;
