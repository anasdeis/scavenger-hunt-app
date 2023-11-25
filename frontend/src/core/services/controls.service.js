import { api } from '../../config';
import { errorHandler } from '../error-handler/ErreurHandler';

export function getControls() {
  return api.get('gameplay/all').catch((e) => errorHandler(e));
}

export function getUserListForUser() {
  var user = JSON.parse(sessionStorage.getItem('user'));
  return api.get('discover/userListForUser/' + user.id).catch((e) => errorHandler(e));
}

export function getUserListAll() {
  return api.get('user/all').catch((e) => errorHandler(e));
}

export function updateGamePlay(play, EndGame, dateEnd) {
  var gamePlay = {
    play: !!play,
    endGame: !!EndGame,
    endDate: String(dateEnd).split('GMT')[0]
  };
  return api.put('gameplay/update', gamePlay).catch((e) => errorHandler(e));
}

export function getGameplay() {
  return api.get('gameplay/get').catch((e) => errorHandler(e));
}
