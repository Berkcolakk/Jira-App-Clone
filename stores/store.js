import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers/login/authReducer';
import Main from './reducers/main/main';
export default configureStore({
  reducer: {
    Auth: AuthReducer,
    Main: Main
  }
})