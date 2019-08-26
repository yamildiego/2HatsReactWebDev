import React from 'react';
import './Modal.css';

function Modal(props) {
    return (
        <div className="Modal">
            <div className="ModalContent">
                {props.children}
            </div>
            <div className="ModalBackdrop" onClick={props.closeModal}></div>
        </div>
    )

}

export default Modal;