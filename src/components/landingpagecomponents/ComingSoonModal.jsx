// components/SubmissionModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ComingSoon = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className='coming-soon'>
            <Modal.Header closeButton className='border-0'>

            </Modal.Header>
            <Modal.Body className='text-center px-4'>
                Our exciting new product is currently under development. Rest assured, your email and information are securely stored in our records. We will reach out to you soon with more details. Stay tuned!
            </Modal.Body>

        </Modal>
    );
};

export default ComingSoon;
