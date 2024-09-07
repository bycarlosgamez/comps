import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {!showModal && (
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
      )}
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button onClick={handleClose} primary>
              I Accept
            </Button>
          }
        >
          <p>Here is the content that you need to agree</p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
