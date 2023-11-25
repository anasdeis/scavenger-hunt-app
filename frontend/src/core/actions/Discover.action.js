import { setTentatives } from '../reducers/gameContextSlice';
import { setHit } from '../reducers/gameControlSlice';
import { addDiscover, addTentative, getTentatives, initialize } from '../services/discovery.service';

/*function getNews(oldListe, newListe) {
  var existantIds = oldListe.map((item) => {
    return item.id;
  });
  return newListe.filter((tentative) => !existantIds.includes(tentative.id));
}*/

export function addDiscoveryRequest(u1, u2) {
  return function (dispatch) {
    return addDiscover(u1, u2).then(() => {
      dispatch(setHit(true));
    });
  };
}

export function RequestGetTentatives() {
  return function (dispatch) {
    return getTentatives().then((res) => {
      if (res != undefined) {
        dispatch(setTentatives(res.data.data));
      }
      //updater les news
      //soustraire les nouveaux des anciens
      //appeler une fonction qui affiche les animations chaque 5 secondes
    });
  };
}

export function RequestAddTentative(idU1, idU2, trouve) {
  return function (dispatch) {
    return addTentative(idU1, idU2, trouve).then((res) => {
      // console.log(res.data.data)
      // var news = getNews(oldList,res.data.data)
      dispatch(setTentatives(res.data.data));
      // dispatch(addTentative(res.data.data))
      // setAnimations(news)
    });
  };
}

export function Initialize() {
  return function (dispatch) {
    return initialize();
  };
}
