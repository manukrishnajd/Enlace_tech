import Table from 'react-bootstrap/Table';
import styles from '../styles/Table.module.css'


export default function Tables(props:any) {
  return (
    <Table className={styles.table} >
    <thead >
      <tr className={styles.header}>

          <th className={styles.head}>{props.tableHead}</th>
 
      
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>{props.tableData}</td>
        
      </tr>
    </tbody>
    
  </Table>
  )
}
