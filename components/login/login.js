import Head from 'next/head'
// import Image from 'next/image'
import { connect, useDispatch } from 'react-redux';
import { EmailChange, PasswordChange, Success, RememberMeChange } from '../../stores/reducers/login/authReducer';
import { LoginService } from '../../services/login/login';
import Swal from 'sweetalert2'
import Router from 'next/router'
//SCSS
import '../../styles/login/login.module.scss';



const mapStateToProps = state => ({ ...state.Auth });

const Login = (props) => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("authUser") != null) {
            Router.push("/Main");
        }
    }
    const dispatch = useDispatch();
    const UserLogin = e => {
        LoginService(props.Email, props.Password).then((data) => {
            if (data != null) {
                dispatch(Success({ IsLogin: true, Message: data.Message }))
            }
            Swal.fire({
                title: props.Message,
                icon: 'success',
                showConfirmButton: false,
                timer: 500
            })
        });
    }
    return (
        <div className='class="h-full"'>
            <Head>
                <title>Login</title>
            </Head>
            <div>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    start your 14-day free trial
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={props.Email || ''} onChange={e => dispatch(EmailChange({ Email: e.currentTarget.value }))}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={props.Password || ''} onChange={e => dispatch(PasswordChange({ Password: e.currentTarget.value }))}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        value={props.RememberMe || false} onChange={e => dispatch(RememberMeChange())}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <Container>
                <div id="loginContainer" style={{ marginTop: '20%;' }}>
                    <Card id="loginForm">
                        <Card.Header>
                            <h3>Login</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={UserLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={props.Email || ''} onChange={e => dispatch(EmailChange({ Email: e.currentTarget.value }))} />
                                    <Form.Text className="text-muted" >
                                        Well never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={props.Password || ''} onChange={e => dispatch(PasswordChange({ Password: e.currentTarget.value }))} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                                    <Form.Check type="checkbox" label="Check me out"  />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Şifremi unuttum.
                        </Card.Footer>
                    </Card>
                </div>
            </Container> */}
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(Login);