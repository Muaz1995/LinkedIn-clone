import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Login/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
