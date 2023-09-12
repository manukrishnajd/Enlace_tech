import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../styles/Table.module.css';


export default function Dropdowns() {
  return (
    <div>
      <select className='drop' name="" id="">
        <option className='option' value="Accept">Accept</option>
        <option className='option' value="Reject">Reject</option>
      </select>
    </div>
  );
}
