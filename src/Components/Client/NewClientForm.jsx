import React from "react";
import styles from "./NewClientForm.module.css";
import api from "../../api/carlease";
import { useRef } from "react";
import {useNavigate} from "react-router-dom";

//fname, lname, address, dob, fidelity
function NewClientForm() {
  const navigate = useNavigate();
  const fnameInputRef = useRef("");
  const lnameInputRef = useRef("");
  const addressInputRef = useRef("");
  const dobInputRef = useRef("");
  const fidelityInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const fnameValue = fnameInputRef.current.value;
    const lnameValue = lnameInputRef.current.value;
    const addressValue = addressInputRef.current.value;
    const dobValue = dobInputRef.current.value;
    const fidelityValue = fidelityInputRef.current.value;

    const client = {
      fname: fnameValue,
      lname: lnameValue,
      address: addressValue,
      dob: dobValue,
      fidelity: fidelityValue,
    };

    try {
      await api.post("/client", client);
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.formContent} onSubmit={submitHandler}>
      <h2>Ajouter un nouveau client</h2>
      <div className={styles["input-group"]}>
        <label htmlFor="fname">Prénom</label>
        <input
          className={styles.input}
          type="text"
          name="fname"
          id="fname"
          ref={fnameInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="lname">Nom</label>
        <input
          className={styles.input}
          type="text"
          name="lname"
          id="lname"
          ref={lnameInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="address">Adresse</label>
        <input
          className={styles.input}
          type="text"
          name="address"
          id="address"
          ref={addressInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="dob">Date de naissance</label>
        <input
          className={styles.input}
          type="date"
          name="dob"
          id="dob"
          ref={dobInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="fidelity">Fidélité</label>
        <input
          className={styles.input}
          type="number"
          name="fidelity"
          id="fidelity"
          min="0"
          step="1"
          ref={fidelityInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <input
          className={styles.button}
          type="submit"
          name="submit-btn"
          id="submit-btn"
          value="Enregistrer"
        />
      </div>
    </form>
  );
}

export default NewClientForm;
