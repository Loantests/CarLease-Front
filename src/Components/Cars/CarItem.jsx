import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";
import Card from "../UI/Card";
import styles from "./CarItem.module.css";

function CarItem(props) {
  const context = useContext(MainContext);

  const updateCar = () => {
    context.setCar(props.car);
    context.setAction("editCar");
  };

  const deleteCar = () => {};

  const listContracts = () => {
    context.setCar(props.car);
  };

  return (
    <Card id={styles.card}>
      <div className={styles.CarItem}>
        <div className={styles.ImageContainer}>
          <img src={props.car.imageLink} alt={props.car.imageAlt} />
        </div>
        <div className={styles.carInfo}>
          <h3>Matricule : {props.car.registration}</h3>
          <p>Marque : {props.car.brand}</p>
          <p>Couleur : {props.car.color}</p>
          <p>Carburant : {props.car.fuel}</p>
          <p>Puissance : {props.car.power}</p>
          <p>Vitesse max : {props.car.maxSpeed}</p>
          <p>Kilométrage : {props.car.km}</p>
          <p>
            Disponibilité : {props.car.inUse ? "Diponible" : "Indisponible"}{" "}
          </p>
          <p>Date de mise en route : {props.car.firstUse}</p>
        </div>
        <div className={styles.icons}>
          <div className={styles["cta-item"]} onClick={deleteCar}>
            <FontAwesomeIcon icon={faTrashCan} className={styles.icon}/>
          </div>
          <div className={styles["cta-item"]} onClick={updateCar}>
            <Link to="/newcar">
              <FontAwesomeIcon icon={faPenToSquare} className={styles.icon}/>
            </Link>
          </div>
          <div className={styles["cta-item"]} onClick={listContracts}>
            <Link to="/contracts">
              <FontAwesomeIcon icon={faList} className={styles.icon}/>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CarItem;
