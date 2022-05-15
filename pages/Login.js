import Login from "../components/login/login";

const mapStateToProps = state => ({ ...state.Main });

const LoginPage = () => {
    return (
        <Login />
    )
}
export default LoginPage;