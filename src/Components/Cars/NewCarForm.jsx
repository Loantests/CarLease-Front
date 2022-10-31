import React, { useContext } from "react";
import api from "../../api/carlease";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from '../UI/Form.module.css'
import MainContext from "../../store/Main";

function NewCarForm() {
  const context = useContext(MainContext);
  const navigate = useNavigate();
  const registrationInputRef = useRef();
  const colorInputRef = useRef();
  const fuelInputRef = useRef();
  const brandInputRef = useRef();
  const cylindreInputRef = useRef();
  const maxSpeedInputRef = useRef();
  const kmInputRef = useRef();
  const [inUse, setInUse] = useState(context.car ? context.car.registration : false);
  const firstUseInputRef = useRef();
  const contractInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const registrationValue = registrationInputRef.current.value;
    const colorValue = colorInputRef.current.value;
    const fuelValue = fuelInputRef.current.value;
    const brandValue = brandInputRef.current.value;
    const cylindreValue = cylindreInputRef.current.value;
    const maxSpeedValue = maxSpeedInputRef.current.value;
    const kmValue = kmInputRef.current.value;
    const firstUseValue = firstUseInputRef.current.value;
    const contractValue = contractInputRef.current.value;

    const car = {
      registration: registrationValue,
      color: colorValue,
      fuel: fuelValue,
      brand: brandValue,
      cylindre: cylindreValue,
      maxSpeed: maxSpeedValue,
      km: kmValue,
      inUse: inUse,
      firstUse: firstUseValue,
      contract: { id: contractValue },
    };

    try {
      await api.post("/cars/new", car);
      navigate("/cars");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContent}>
      <h2>Ajouter une voiture</h2>
      <div className={styles["input-group"]}>
        <label htmlFor="registrationId">Matricule</label>
        <input
          className={styles.input}
          type="text"
          name="registrationName"
          id="registrationId"
          defaultValue={context.car ? context.car.registration : ""}
          ref={registrationInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="colorId">Couleur</label>
        <input
          className={styles.input}
          type="text"
          name="colorName"
          id="colorId"
          defaultValue={context.car ? context.car.color : ""}
          ref={colorInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="fuelId">Carburant</label>
        <input
          className={styles.input}
          type="text"
          name="fuelName"
          id="fuelId"
          defaultValue={context.car ? context.car.fuel : ""}
          ref={fuelInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="brandId">Marque</label>
        <input
          className={styles.input}
          type="text"
          name="brandName"
          id="brandId"
          defaultValue={context.car ? context.car.brand : ""}
          ref={brandInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="cylindreId">Cylindre</label>
        <input
          className={styles.input}
          type="number"
          name="cylindreName"
          id="cylindreId"
          min="0"
          defaultValue={context.car ? context.car.cylindre : ""}
          ref={cylindreInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="maxSpeedId">Vitesse maximale</label>
        <input
          className={styles.input}
          type="number"
          name="maxSpeedName"
          id="maxSpeedId"
          min="0"
          defaultValue={context.car ? context.car.maxSpeed : ""}
          ref={maxSpeedInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="kmId">Kilométrage</label>
        <input
          className={styles.input}
          type="number"
          name="kmName"
          id="kmId"
          min="0"
          defaultValue={context.car ? context.car.km : ""}
          ref={kmInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="yesId">
          Oui
          <input
            type="radio"
            name="inUseName"
            id="yesId"
            value="true"
            checked={inUse === true}
            onChange={(e) => {
              setInUse(true);
            }}
          />
        </label>
        <label htmlFor="noId">
          Non
          <input
            type="radio"
            name="inUseName"
            id="noId"
            checked={inUse === false}
            onChange={(e) => {
              setInUse(false);
            }}
          />
        </label>
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="firstUseId">Mise en service</label>
        <input
          className={styles.input}
          type="date"
          name="firstUseName"
          id="firstUseId"
          defaultValue={context.car ? context.car.firstUse : ""}
          ref={firstUseInputRef}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="contractId">Contrat</label>
        <input
          className={styles.input}
          type="number"
          name="contractName"
          id="contractId"
          min="0"
          defaultValue={context.car ? context.car.contract : ""}
          ref={contractInputRef}
          required
        />
        <Link to={"/findcontract"}>Find</Link>
      </div>
      <div className={styles["input-group"]}>
        <input
          className={styles.button}
          type="submit"
          name="submit-btn"
          id="submit-btn"
          value="Enregistrer"
        />
        <input type="button" value="" />
      </div>
    </form>
  );
}

export default NewCarForm;
