import * as Swal from 'sweetalert2';

import { login, signin } from '../services/user.service';

export function loginRequest(email, password, navigateFunction) {
  return function (dispatch) {
    return login(email, password).then((res) => {
      if (res != undefined) {
        sessionStorage.setItem('user', JSON.stringify(res.data.data));
        navigateFunction();
      }
    });
  };
}

export function signinRequest(firstName, lastName, unity, email, password, picture, funFact, redirect) {
  return function (dispatch) {
    return signin(firstName, lastName, 'u', email, password, picture, funFact).then((res) => {
      if (res != undefined) {
        if (res.data.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Compte créé!',
            text: ''
          }).then((result) => {
            if (result.isConfirmed) {
              sessionStorage.setItem('user', JSON.stringify(res.data.data));
              redirect();
            }
          });
        }
        //JSON.parse(x)
      }
    });
  };
}
