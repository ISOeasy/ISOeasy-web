// components/SubmissionModal.js
import Image from 'next/image';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import success from "../../assets/success2.jpg"

const ComingSoon = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className='coming-soon'>
            <Modal.Header closeButton className='border-0'>

            </Modal.Header>
            <Modal.Body className='text-center px-4'>
                <h3>Thankyou for submitting the form</h3>
                <div className='pb-3'>
                <Image src={success} width={100} height={100} alt='success'/>
                </div>
               <p>
               Our exciting new product is currently under development. Rest assured, your email and information are securely stored in our records. We will reach out to you soon with more details. Stay tuned!
               </p>
                
            </Modal.Body>

        </Modal>
    );
};

export default ComingSoon;
