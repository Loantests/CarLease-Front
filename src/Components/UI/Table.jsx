import React from 'react'
import styles from './Table.module.css'

function Table(props) {
  return (
    <table className={styles.table}>{props.children}</table>
  )
}

export default Table