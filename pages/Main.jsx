import Dashboard from "components/Dashboard/Dashboard";
import Router from 'next/router';
import Layout from 'Layouts/Main/Layout';
import cookie from "js-cookie";
import { useEffect } from "react";
const MainPage = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("authUser") === null) {
            Router.push("/");
        }
    }
    return (
        <>
            <Layout />
            <Dashboard />
        </>
    )
}
export default MainPage;