import cookie from "js-cookie";
import { GetBaseURL } from "Services/Base/BaseService";

const UserData = {
  DateOfBirth: "30.06.1997",
  Message: "",
  NameSurname: "Berk Çolak",
  Image: "/public/img/40931799.jpg" || "/public/img/noImage.png",
  IsLogin: false,
  RememberMe: false,
  Token: "a2acf5fd-6a7b-49cc-b6cb-6f6236994d6b",
  RefreshToken: "e979615c-b764-433f-9b81-595dbf49d8a9",
};

export const LoginService = (username, password) => {
  return new Promise((resolve, reject) => {
    UserData.Message = "Başarı ile giriş yaptınız.";
    UserData.Email = username;
    UserData.IsLogin = true;
    UserData.RememberMe = true;
    localStorage.setItem("token", UserData.Token);
    localStorage.setItem("rtoken", UserData.RefreshToken);
    localStorage.setItem("user",JSON.stringify(UserData))
    resolve(UserData);
  });
};
export const LogoutService = () => {
  localStorage.removeItem("authUser");
};
