import Image from 'next/image';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const DesignsCard = ({ image, title, description, onClick }) => {
  return (
    <div className="projects border-0 "  >
      <div className="imagewrapper">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            alt={title}
            src={image}
            layout='fill'
            objectFit='cover'
            onClick={onClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className='py-3 px-2 text-black'>
        <Row>
          <Col xs={9}>
            <h5>{title}</h5>
          </Col>
          <Col xs={3}>
          <Button className='w-100 view' onClick={onClick}>View</Button>
          </Col>
        </Row>


        <p>{description}</p>
      </div>
    </div>
  );
};

export default DesignsCard;
