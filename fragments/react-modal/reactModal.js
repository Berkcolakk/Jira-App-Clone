import Modal from 'react-modal';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReactModal = (props) => {
    const modalClose = e => {

    }
    return (
        <Modal isOpen={props.props} shouldCloseOnEsc={true}>

        </Modal>
    )
}
export default ReactModal;