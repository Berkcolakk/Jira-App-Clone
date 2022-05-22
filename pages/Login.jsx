import Login from "components/Auth/Login";
import Router from 'next/router';
const Home = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("authUser") != null) {
      Router.push("/Main");
    }
  }
  return (
    <Login />
  )
}
export default Home;
