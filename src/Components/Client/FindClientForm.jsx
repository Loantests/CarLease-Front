import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../api/carlease";
import MainContext from "../../store/Main";
import styles from "../UI/Form.module.css";
import styles2 from "../Cars/FindCarForm.module.css";

function FindClientForm(props) {
  const context = useContext(MainContext);
  const idInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const idValue = idInputRef.current.value;

    try {
      const response = await api.get("/client/" + idValue);
      if (response.data) {
        props.setClient(response.data);
        context.setClient(response.data);
      }
    } catch (error) {
      props.setClient(null);
      context.setClient(null);
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContent}>
      <h2>Chercher</h2>
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
        <input type="submit" value="Chercher client" />
        <Link to="/newcontract">
          <input type="button" value="Ok" />
        </Link>
      </div>
    </form>
  );
}

export default FindClientForm;
