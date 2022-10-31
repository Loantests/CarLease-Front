import React from "react";
import CarItem from "./CarItem";
import styles2 from './CarsList.module.css'



function CarsList(props) {
  return (
    <div className={styles2.grid}>
      {props.cars.map((car) => {
        return <CarItem car={car}/>;
      })}
    </div>
  );
}

export default CarsList;
