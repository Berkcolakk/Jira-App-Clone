import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import TopMenu from './_topMenu';
import { GetUser } from '../../services/login/login';

const Layout = () => {
    const User = GetUser();
    return (
        <>
            <TopMenu props={User} />
            <Container id="main">
            </Container>
        </>
    )
}
export default Layout;