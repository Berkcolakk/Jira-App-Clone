import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Container, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Router from 'next/router';
import { faHomeUser, faUserLarge, faBell, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeTopMenuIssueModal } from '../../stores/reducers/main/main';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from '../reactModal/reactModal';
import { useEffect } from 'react';

const UserSettings = e => {
    alert();
}
const UserLogout = e => {
    Swal.fire({
        title: "Are you sure you want to log out?",
        icon: 'question',
        showConfirmButton: true,
        confirmButtonText: 'Logout',
        showDenyButton: true,
        denyButtonText: 'Stay'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Logout', '', 'success')
            //   Router.push('Login')
        } else if (result.isDenied) {
            Swal.fire('Not logout', '', 'info')
        }
    })
}
const RightTopMenu = (props) => {
    return (
        <Nav ><FormControl type="search" placeholder="Search" aria-label="Search" />
            <Nav.Link className='me-auto' href="#features"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faUserLarge} />} id="collasible-nav-dropdown" >
                <NavDropdown.Header>Jira</NavDropdown.Header>
                <NavDropdown.Item href="javascript:;">Personel settings</NavDropdown.Item>
                <NavDropdown.Header>{props.props.NameSurname}</NavDropdown.Header>
                <NavDropdown.Item href="javascript:;">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='javascript:;' onClick={UserLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav >
    )
}

const TopMenu = (props) => {
    const dispatch = useDispatch();
    const Main = useSelector((state) => state.Main);
    const IssueCreateBtn = e => {
        dispatch(ChangeTopMenuIssueModal({ TopMenuIssueModal: true }))
    }
    return (
        <>
            <Head>
                <title>{props.props.NameSurname}</title>
            </Head>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="javascript:;"><FontAwesomeIcon icon={faHomeUser} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="javascript:;">Your Work</Nav.Link>
                            <Nav.Link href="javascript:;">Projects</Nav.Link>
                            <Nav.Link href="javascript:;">Filters</Nav.Link>
                            <Nav.Link href="javascript:;">Dashboards</Nav.Link>
                            <Nav.Link href="javascript:;">People</Nav.Link>
                            <Nav.Link href="javascript:;">Apps</Nav.Link>
                            <Button type="button" onClick={IssueCreateBtn}>Create</Button>
                        </Nav>
                        <RightTopMenu props={props.props} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ReactModal props={Main.TopMenuIssueModal} />
            <footer >
            </footer>
        </>
    )
}
export default TopMenu;
