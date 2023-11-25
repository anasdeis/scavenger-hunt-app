import { configureStore } from '@reduxjs/toolkit';

import gameContextReducer from '../core/reducers/gameContextSlice';
import gameControlReducer from '../core/reducers/gameControlSlice';
import sliderReducer from '../core/reducers/sliderSlice';
import userReducer from '../core/reducers/userSlice';

export default configureStore({
  reducer: {
    slider: sliderReducer,
    user: userReducer,
    gameControl: gameControlReducer,
    gameContext: gameContextReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
