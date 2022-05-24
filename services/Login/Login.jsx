import cookie from "js-cookie";
import { GetBaseURL } from "Services/Base/BaseService";
import { UserData } from "datas/Login/Login";

export const LoginService = (username, password) => {
  return new Promise((resolve, reject) => {
    UserData.Message = "Başarı ile giriş yaptınız.";
    UserData.Email = username;
    UserData.IsLogin = true;
    UserData.RememberMe = true;
    localStorage.setItem("token", UserData.Token);
    localStorage.setItem("rtoken", UserData.RefreshToken);
    localStorage.setItem("user", JSON.stringify(UserData));
    resolve(UserData);
  });
};
export const LogoutService = () => {
  localStorage.removeItem("authUser");
};
