import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../api/carlease";
import MainContext from "../../store/Main";
import styles from "../UI/Form.module.css";
import styles2 from "./FindCarForm.module.css";

function FindCarForm(props) {
  const context = useContext(MainContext);
  const idInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const idValue = idInputRef.current.value;

    try {
      const response = await api.get("/cars/" + idValue);
      if (response.data) {
        props.setCar(response.data);
        context.setCar(response.data);
      }
    } catch (error) {
      props.setCar(null);
      context.setCar(null);
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.formContent}>
      <h2>Trouver une voiture</h2>
      <label htmlFor="clientId" className={styles["input-group"]}>
        Id :
        <input
          type="number"
          name="clientName"
          id="clientId"
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

export default FindCarForm;
