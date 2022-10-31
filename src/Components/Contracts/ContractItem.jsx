import React from 'react'
import styles from './ContractItem.module.css'

function ContractItem(props) {
  return (
    <tr className={styles.row}>
      <td className={styles.case}>{props.contract.date}</td>
      <td className={styles.case}>{props.contract.startLease}</td>
      <td className={styles.case}>{props.contract.endLease}</td>
      <td className={styles.case}>{props.contract.advance}</td>
      <td className={styles.case}>{props.contract.leftToPay}</td>
      <td className={styles.case}>{props.contract.totalPrice}</td>
      <td className={styles.case}>{props.contract.placeOfReturn}</td>
      <td className={styles.case}>
        <button onClick={() => props.onDelete(props.contract)}>Delete</button>
      </td>
    </tr>
  )
}

export default ContractItem