import React from 'react';

const Modal = ({ showModal, setShowModal, modalMessage }) => {
  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <p>{modalMessage}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
