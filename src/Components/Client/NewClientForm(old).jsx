import React from 'react'
import styles from './NewClientForm.module.css'

//fname, lname, address, dob, fidelity
function NewClientForm() {
  return (
    <form className={styles.formContent}>
        <div className={styles['input-group']}>
            <label htmlFor="fname">Prénom</label>
            <input className={styles.input} type="text" name="fname" id="fname" required/>
        </div>
        <div className={styles['input-group']}>
            <label htmlFor="lname">Nom</label>
            <input className={styles.input} type="text" name="lname" id="lname" required/>
        </div>
        <div className={styles['input-group']}>
            <label htmlFor="address">Adresse</label>
            <input className={styles.input} type="text" name="address" id="address" required/>
        </div>
        <div className={styles['input-group']}>
            <label htmlFor="dob">Date de naissance</label>
            <input className={styles.input} type="date" name="dob" id="dob" required/>
        </div>
        <div className={styles['input-group']}>
            <label htmlFor="fidelity">Fidélité</label>
            <input className={styles.input} type="number" name="fidelity" id="fidelity" required/>
        </div>
        <div className={styles['input-group']}>
            <input className={styles.button} type="submit" name="save" id="save" value="Enregistrer"/>
        </div>
    </form>
  )
}

export default NewClientForm