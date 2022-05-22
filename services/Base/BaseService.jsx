export const GetBaseURL = () => {
  return "https://localhost:57000";
};
export const GetTokenForHeader = () => {
  const token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return token;
};
export const GetRefreshTokenForHeader = () => {
  const token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("rtoken");
  }
  return token;
};
export const GetUser = () => {
  const user = "";
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  }
  return user;
};
