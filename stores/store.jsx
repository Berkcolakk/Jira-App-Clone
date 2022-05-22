import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Reducers/Login/AuthReducer';
import Main from './Reducers/Main/Main';
import Navbar from './Reducers/Main/Navbar';

const taskMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const taskState = store.getState();
  if (typeof window !== 'undefined') {
    localStorage.setItem('task', JSON.stringify(taskState))
  }

  return result;
};

export default configureStore({
  reducer: {
    Auth: AuthReducer,
    Main: Main,
    Navbar: Navbar
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskMiddleware),
})
