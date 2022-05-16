import Layout from "../components/_layouts/_layout";
import Router from 'next/router';

const MainPage = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("authUser") === null) {
            Router.push("/");
        }
    }
    return (
        <Layout />
    )
}
export default MainPage;