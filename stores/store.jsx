import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Reducers/Login/AuthReducer';
import Dashboard from './Reducers/Dashboard/Dashboard';
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
    Dashboard: Dashboard,
    Navbar: Navbar
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskMiddleware),
})
