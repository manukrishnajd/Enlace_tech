import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../styles/Table.module.css';

export default function Dropdowns() {
  return (
    <div className={styles.dropdownContainer}>
      <Dropdown>
        <Dropdown.Toggle variant="" className={styles.drop} id="dropdown-basic">
          Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Accept</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Reject</Dropdown.Item>
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
