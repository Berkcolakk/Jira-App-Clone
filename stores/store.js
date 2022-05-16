import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers/login/authReducer';
import Main from './reducers/main/main';
import Navbar from './reducers/main/navbar';
export default configureStore({
  reducer: {
    Auth: AuthReducer,
    Main: Main,
    Navbar: Navbar
  }
})