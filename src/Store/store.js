// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../Redux/Counterslice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Counterslice";
import milkReducer from "../Redux/MilkSlice";
const store=configureStore({
  reducer:{
    counter:counterReducer,
    milk:milkReducer
  }
})
export default store;