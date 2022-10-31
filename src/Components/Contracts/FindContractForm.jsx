import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";
import styles from "../UI/Form.module.css";
import api from '../../api/carlease'
import styles2 from "../Cars/FindCarForm.module.css";

function FindContractForm(props) {
  const context = useContext(MainContext);
  const idInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const idValue = idInputRef.current.value;

    try {
      const response = await api.get("/contracts/" + idValue);
      if (response.data) {
        props.setContract(response.data);
        context.setContract(response.data);
      }
    } catch (error) {
      props.setContract(null);
      context.setContract(null);
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.formContent}>
      <h2>Trouver une voiture</h2>
      <label htmlFor="contractId" className={styles["input-group"]}>
        Id :
        <input
          type="number"
          name="contractName"
          id="contractId"
          min="1"
          ref={idInputRef}
          className={styles.input}
          required
        />
      </label>
      <div className={styles2.buttons}>
        <input type="submit" value="Chercher" />
        <Link to="/newcontract">
          <input type="button" value="Ok" />
        </Link>
      </div>
    </form>
  );
}

export default FindContractForm;
