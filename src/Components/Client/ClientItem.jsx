import React from "react";
import Card from "../UI/Card";
import styles from './ClientItem.module.css'

function ClientItem(props) {
  return (
    <Card>
      <div className={styles.clientInfo}>
        <h3 className={styles.h3}>Nom complet : {props.client.fname + " " + props.client.lname}</h3>
        <p>Date de naissance : {props.client.dob}</p>
        <p>Fidélité : {props.client.fidelity}</p>
        <p>Adresse : {props.client.address}</p>
      </div>
    </Card>
  );
}

export default ClientItem;
