import Dashboard from "../components/dashboard/dashboard";
import Router from 'next/router';
import Layout from '../components/_layouts/_layout';

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