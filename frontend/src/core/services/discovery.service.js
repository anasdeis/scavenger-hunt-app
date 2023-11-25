import { api } from '../../config';
import { errorHandler } from '../error-handler/ErreurHandler';

export function addDiscover(u1, u2) {
  const data = {
    idUser1: u1,
    idUser2: u2
  };
  return api.post('discover/add', data).catch((e) => errorHandler(e));
}

export function getTentatives() {
  return api.get('tentative/all').catch((e) => errorHandler(e));
}

export function addTentative(id1, id2, trouve) {
  // console.log("id1 : ",id1," id2 : ",id2)
  const data = {
    id: -1,
    id1: Number(id1),
    id2: Number(id2),
    trouve: trouve
  };
  return api.post('tentative/add', data).catch((e) => errorHandler(e));
}

export function initialize() {
  return api.delete('gameplay/initialize').catch((e) => errorHandler(e));
}
