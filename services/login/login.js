const UserData = {
    Email: "",
    DateOfBirth: "30.06.1997",
    Message: "",
    NameSurname:"Berk Çolak",
    Image: "",
    IsLogin: false,
    RememberMe: false,
    Token: "a2acf5fd-6a7b-49cc-b6cb-6f6236994d6b",
    RefreshToken: "e979615c-b764-433f-9b81-595dbf49d8a9"
}
export const LoginService = (username, password) => {
    return new Promise((resolve, reject) => {
        UserData.Message = "Başarı ile giriş yaptınız.";
        UserData.Email = username;
        UserData.IsLogin = true;
        UserData.RememberMe = true;
        localStorage.setItem("authUser", JSON.stringify(UserData));
        resolve(UserData);
    })
}
export const LogoutService = () => {
    localStorage.removeItem("authUser");
}