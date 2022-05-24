import Dashboard from "components/Dashboard/Dashboard";
import Router from "next/router";
import Layout from "Layouts/Main/Layout";
import { useEffect } from "react";
import { GetTokenForHeader } from "Services/Base/BaseService";
const MainPage = () => {
  useEffect(() => {
    
    if (GetTokenForHeader() == null) {
      Router.push("/");
    }
  });
  return (
    <>
      <Dashboard />
    </>
  );
};
MainPage.layout = Layout;
export default MainPage;
