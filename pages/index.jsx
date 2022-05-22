import Login from "components/Auth/Login";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetTokenForHeader } from "Services/Base/BaseService";
const Home = () => {
  const Router = useRouter();
  useEffect(() => {
    if (GetTokenForHeader() != null) {
      Router.push("/Main");
    }
  });
  return <Login />;
};
export default Home;
