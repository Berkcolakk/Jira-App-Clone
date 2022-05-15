import { createSlice } from '@reduxjs/toolkit'

const defaultUserImage = "noImage.png";
export const AuthReducer = createSlice({
  name: 'Auth',
  initialState: {
    Email: "",
    NameSurname:"",
    DateOfBirth: "",
    Message: "",
    Image: "",
    IsLogin: "",
    RememberMe: "",
    Token: ""
  },
  reducers: {
    EmailChange: (state, action) => {
      state.Email = action.payload.Email;
    },
    PasswordChange: (state, action) => {
      state.Password = action.payload.Password;
    },
    RememberMeChange: state => {
      state.RememberMe = !state.RememberMe;
    },
    Failed: (state, action) => {
      state.IsLogin = false;
      state.Message = action.payload.Message;
      state.Email = "";
    },
    Success: (state, action) => {
      state.IsLogin = true;
      state.Email = action.payload.Email;
      state.Message = action.payload.Message;
      state.RememberMe = !state.RememberMe
    },
    UserProfileImgUpdate: (state, action) => {
      state.Image = '../../../public/img/' + action.payload.Image;
    },
    SetUser: (state, action) => {
      state.Email = action.payload.Email;
      state.DateOfBirth = action.payload.DateOfBirth;
      state.Message = action.payload.Message;
      state.Image = action.payload.Image;
      state.IsLogin = action.payload.IsLogin;
      state.RememberMe = action.payload.RememberMe;
      state.Token = action.payload.Token;
      state.NameSurname = action.payload.NameSurname;
    }
  }
})

// Action creators are generated for each case reducer function
export const { Failed, Success, UserProfileImgUpdate, EmailChange, PasswordChange, RememberMeChange, SetUser } = AuthReducer.actions

export default AuthReducer.reducer