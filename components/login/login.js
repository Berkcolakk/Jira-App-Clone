import Head from 'next/head'
// import Image from 'next/image'
import { Form, Container, Button, Card } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { EmailChange, PasswordChange, Success, RememberMeChange } from '../../stores/reducers/login/authReducer';
import { LoginService } from '../../services/login/login';
import Swal from 'sweetalert2'
import '../../styles/login/login.module.scss';
import Router from 'next/router'



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
                timer: 1000
            })
            // .then(() => {
            //     Router.push("/Main");
            // })
        });
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container >
                <div id="login" className='d-flex justify-content-center h-100'>
                    <Card>
                        <Card.Header>
                            <h3>Login</h3>
                            {/* <Image src="../../public/img/noImage.png" width={50} height={50} /> */}
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
                                {/*  */}
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                                    <Form.Check type="checkbox" label="Check me out" value={props.RememberMe || false} onChange={e => dispatch(RememberMeChange())} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </div>
            </Container>
        </>
    )
}
export default connect(mapStateToProps)(Login);