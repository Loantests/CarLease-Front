import React from 'react'
import styles from './ClientRow.module.css'



function ClientRow(props) {
  
  return (
    <tr className={styles.row}>
        <td className={styles.case}>{props.client.fname}</td>
        <td className={styles.case}>{props.client.lname}</td>
        <td className={styles.case}>{props.client.address}</td>
        <td className={styles.case}>{props.client.dob}</td>
        <td className={styles.case}>{props.client.fidelity}</td>
        <td className={styles.case}>
          <button onClick={() => props.onDelete(props.client)}>Delete</button>
        </td>
        
    </tr>
  )
}

export default ClientRow