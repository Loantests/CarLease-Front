import React from "react";
import CarsList from "../Components/Cars/CarsList";
import { useState, useEffect } from "react";
import api from '../api/carlease'

function AllCars() {
  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const result = await api.get("/cars/");
      setCars(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div >
      <h2>Toutes les voitures</h2>
      <CarsList cars={cars} />
    </div>
  );
}

export default AllCars;
