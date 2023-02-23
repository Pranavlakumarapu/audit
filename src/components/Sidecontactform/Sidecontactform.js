import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Contact from '../Contact/Contact'
export default function Sidecontactform() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        BookDemo
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'  >
        <Offcanvas.Header closeButton>    </Offcanvas.Header>
        <Offcanvas.Body >
        <Contact name="Demo"/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
