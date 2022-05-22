import Login from "components/Auth/Login";
import { useRouter } from "next/router";
const Home = () => {
  const Router = useRouter();
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
