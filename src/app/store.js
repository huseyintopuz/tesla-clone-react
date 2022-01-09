import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import menuReducer from '../features/car/menuSlices';
import infoReducer from '../features/car/footerSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    menu: menuReducer,
    info: infoReducer,
  },
});



