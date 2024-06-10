"use client"
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

const ImageEnlargeModal = ({ showModal, handleClose, selectedProject }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Modal show={showModal} className='image-enlarge' onHide={handleClose} centered>
      <Modal.Header closeButton className='bg-transparent'>
      </Modal.Header>
      <Modal.Body className='bg-transparent'>
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>

          {loading && (
            <div className="loader-container">
              <ClipLoader color="#d7ba89" />
            </div>
          )}
          {selectedProject && (
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              layout="responsive"
              width={700}
              height={475}
              onLoadingComplete={() => setLoading(false)}
            />
          )}

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageEnlargeModal;
