import { setDateEnd, setPartyEnded, setPlay } from '../../core/reducers/gameControlSlice';
import { getGameplay, getUserListAll, getUserListForUser, updateGamePlay } from '../../core/services/controls.service';
import { setUserList } from '../reducers/sliderSlice';

export function getGameControlRequest() {
  return function (dispatch) {
    return getGameplay().then((res) => {
      if (res.data?.data) {
        dispatch(setPlay(res.data.data.play));
        dispatch(setDateEnd(res.data.data.endDate));
        dispatch(setPartyEnded(res.data.data.endGame));
      }
    });
  };
}

export function getUsersList() {
  return function (dispatch) {
    return getUserListForUser().then((res) => {
      if (res != undefined) {
        dispatch(setUserList(res.data.data));
      }
    });
  };
}

export function RequestGetUserListAll() {
  return function (dispatch) {
    return getUserListAll().then((res) => {
      if (res != undefined) {
        dispatch(setUserList(res.data.data));
      }
    });
  };
}

export function RequestUpdateGameplay(play, EndGame, dateEnd) {
  return function (dispatch) {
    return updateGamePlay(play, EndGame, dateEnd.$d).then((res) => {
      if (res.data?.data) {
        dispatch(setPlay(res.data.data.play));
        dispatch(setDateEnd(res.data.data.endDate));
        dispatch(setPartyEnded(res.data.data.endGame));
      }
    });
  };
}

export function RequestGetGameplay() {
  return function (dispatch) {
    return getGameplay().then((res) => {
      if (res.data?.data) {
        dispatch(setPlay(res.data.data.play));
        dispatch(setDateEnd(res.data.data.endDate));
        dispatch(setPartyEnded(res.data.data.endGame));
      }
    });
  };
}
