import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import TopMenu from './_topMenu';

const Layout = (props) => {
    return (
        <>
        <TopMenu props={props.props} />
        <Container id="main">

        </Container>
        </>
    )
}
export default Layout;