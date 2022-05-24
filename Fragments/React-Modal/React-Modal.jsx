import Modal from 'react-modal';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReactModal = ({isModalOpen,childrenHTML}) => {
    const modalClose = e => {

    }
    console.log(childrenHTML)
    return (
        <Modal isOpen={isModalOpen} shouldCloseOnEsc={true}>
                {childrenHTML}
        </Modal>
    )
}
export default ReactModal;