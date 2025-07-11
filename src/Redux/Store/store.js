import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slice/Counterslice';
import milkReducer from '../Slice/MilkSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    milk: milkReducer,
  },
});

export default store;
