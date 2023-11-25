import { api } from '../../config';
import { errorHandler } from '../error-handler/ErreurHandler';

export function login(email, password) {
  const data = {
    id: '',
    email: email,
    unit: '',
    password: password,
    completeName: '',
    picture: '',
    funFact: '',
    qrCodeB64: '',
    discovered: ''
  };
  return api.post('user/login', data).catch((e) => errorHandler(e));
}

export function signin(firstName, lastName, unity, email, password, picture, funFact) {
  const data = {
    id: '',
    email: email,
    unit: unity,
    password: password,
    completeName: firstName + ' ' + lastName,
    picture: picture,
    funFact: funFact,
    qrCodeB64: '',
    discovered: false
  };
  return api.post('user/add', data).catch((e) => errorHandler(e));
}
