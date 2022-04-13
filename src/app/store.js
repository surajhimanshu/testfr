import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from '../features/clinic.slice';


export const store = configureStore({
  reducer: {
      clinic:clinicReducer
  },
});
