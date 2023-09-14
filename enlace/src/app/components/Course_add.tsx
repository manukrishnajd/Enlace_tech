
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Course_add() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter course name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='label'>Language</Form.Label>
        <Form.Control type="text" placeholder="Enter Language" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='label'>Duration</Form.Label>
        <Form.Control type="text" placeholder="Enter Duration" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='label'>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='label'>Details</Form.Label>
        <Form.Control type="text" placeholder="Enter Details" />
      </Form.Group>
      <div className='w-100 text-center'>
      <input type="submit" value='Add' className='bg border-0  m-auto  ' />
      </div>
    </Form>
    </>
  )
}
