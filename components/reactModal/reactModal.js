import Modal from 'react-modal';
import { Navbar, Container, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReactModal = (props) => {
    debugger;
    return (
        <Modal isOpen={props.props} shouldCloseOnEsc={true}>
            <Nav>
                <Navbar className="responsive-navbar-nav pull-right row justify-content-end">
                    <Nav className="me-auto">
                        <Button variant='lg'><FontAwesomeIcon icon={faX} /></Button>
                    </Nav>
                </Navbar>
            </Nav>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Well never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal>
    )
}
export default ReactModal;