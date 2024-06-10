import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../features/ticketSlice';

const store = configureStore({
  reducer: {
    booking: ticketReducer,
  },
});

export default store;
