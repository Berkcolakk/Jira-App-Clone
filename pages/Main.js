import { connect, useDispatch, useSelector } from "react-redux";
import Layout from "../components/_layouts/_layout";
import { SetUser } from '../stores/reducers/login/authReducer';

const MainPage = () => {
    const auth = useSelector(state => state.Auth)
    const dispatch = useDispatch();
    if (typeof window !== "undefined") {
        if (localStorage.getItem("authUser") != null) {
            debugger;
            dispatch(SetUser(JSON.parse(localStorage.getItem("authUser"))))
        }
    }
    return (
        <Layout props={auth} />
    )
}
export default MainPage;