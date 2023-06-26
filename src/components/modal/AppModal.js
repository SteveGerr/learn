import Modal from 'react-bootstrap/Modal';


const AppModal = ({ show, handleClose, children }) => {

    return (
      <>
        <Modal show={show} onHide={handleClose}>
            { children }
        </Modal>
      </>
    );
  }

  export default AppModal;