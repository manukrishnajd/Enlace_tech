// components/CourseAddPopup.tsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Course_add from './Course_add';

interface CourseAddPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseAddPopup: React.FC<CourseAddPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose} >
      <Modal.Header className='AddCourse' closeButton>
        <Modal.Title>Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Include your Course_add component here */}
        <Course_add />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={onClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default CourseAddPopup;
