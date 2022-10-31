import React, { useState } from "react";
import api from "../../api/carlease";
import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NewContractForm.module.css";
import formStyle from "../UI/Form.module.css"
import MainContext from "../../store/Main";

function NewContractForm() {
  const context = useContext(MainContext);
  const [dateError, setDateError] = useState(false);
  const [amountError, setAmountError] = useState(false)

  const navigate = useNavigate();
  const dateInputRef = useRef("");
  const startLeaseInputRef = useRef("");
  const endLeaseInputRef = useRef("");
  const advanceInputRef = useRef("");
  const leftToPayInputRef = useRef("");
  const totalPriceInputRef = useRef("");
  const placeOfReturnInputRef = useRef("");
  const clientInputRef = useRef("");
  const carInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const dateValue = dateInputRef.current.value;
    const startLeaseValue = startLeaseInputRef.current.value;
    const endLeaseValue = endLeaseInputRef.current.value;
    const advanceValue = advanceInputRef.current.value;
    const leftToPayValue = leftToPayInputRef.current.value;
    const totalPriceValue = totalPriceInputRef.current.value;
    const placeOfReturnValue = placeOfReturnInputRef.current.value;
    const clientValue = clientInputRef.current.value;
    const carValue = carInputRef.current.value;
    console.log(startLeaseValue > endLeaseValue ||
      endLeaseValue < dateValue ||
      startLeaseValue < dateValue)
    if (
      startLeaseValue > endLeaseValue ||
      endLeaseValue < dateValue ||
      startLeaseValue < dateValue
    ) {
      setDateError(true);
      console.log("Reject date");
      return;
    } else {
      setDateError(false);
      console.log("Pass date");
    }

    if(Number(totalPriceValue) !== Number(advanceValue) + Number(leftToPayValue)){
      setAmountError(true);
      console.log("Reject amount");
      return;
    }else{
      setAmountError(false)
      console.log("Pass amount");
    }

    const contract = {
      date: dateValue,
      startLease: startLeaseValue,
      endLease: endLeaseValue,
      advance: advanceValue,
      leftToPay: leftToPayValue,
      totalPrice: totalPriceValue,
      placeOfReturn: placeOfReturnValue,
      client: { id: clientValue },
      car: { id: carValue },
    };

    try {
      await api.post("/contracts/new", contract);
      navigate("/contracts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={formStyle.formContent}>
      <h2>Ajouter un nouveau contrat</h2>
      <div className={styles["input-group"]}>
        <label htmlFor="dateId">Date</label>
        <input
          className={`${styles.input} ${dateError ? styles.redBorder : ""}`}
          type="date"
          name="dateName"
          id="dateId"
          ref={dateInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="startLeaseId">Date de début</label>
        <input
          className={`${styles.input} ${dateError ? styles.redBorder : ""}`}
          type="date"
          name="startLeaseName"
          id="startLeaseId"
          ref={startLeaseInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="endLeaseId">Date de fin</label>
        <input
          className={`${styles.input} ${dateError ? styles.redBorder : ""}`}
          type="date"
          name="endLeaseName"
          id="endLeaseId"
          ref={endLeaseInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="totalPriceId">Montant total</label>
        <input
          className={`${styles.input} ${amountError ? styles.redBorder : ""}`}
          type="number"
          name="totalPriceName"
          id="totalPriceId"
          step="10"
          ref={totalPriceInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="advanceId">Avance</label>
        <input
          className={`${styles.input} ${amountError ? styles.redBorder : ""}`}
          type="number"
          name="advanceName"
          id="advanceId"
          step="10"
          ref={advanceInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="leftToPayId">Reste à payer</label>
        <input
          className={`${styles.input} ${amountError ? styles.redBorder : ""}`}
          type="number"
          name="leftToPayName"
          id="leftToPayId"
          step="10"
          ref={leftToPayInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="placeOfReturnId">Lieu de retour</label>
        <input
          className={styles.input}
          type="text"
          name="placeOfReturnName"
          id="placeOfReturnId"
          ref={placeOfReturnInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="clientId">Client</label>
        <input
          className={styles.input}
          type="text"
          name="clientName"
          id="clientId"
          value={context.client ? context.client.fname + " " + context.client.lname : ""}
          ref={clientInputRef}
          required
        />
        <Link to={"/findclient"}>Find</Link>
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="carId">Voiture</label>
        <input
          className={styles.input}
          type="text"
          name="carName"
          id="carId"
          value={context.car ? context.car.registration + " " + context.car.brand : ""}
          required
        />
        <Link to={"/findcar"}>Find</Link>
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

export default NewContractForm;
