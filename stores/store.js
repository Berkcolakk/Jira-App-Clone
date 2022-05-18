import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers/login/authReducer';
import Main from './reducers/main/main';
import Navbar from './reducers/main/navbar';

const taskMiddleware = (store) => (next) => (action) => {
  debugger;
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
