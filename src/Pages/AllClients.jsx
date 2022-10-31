import React from "react";
import ClientTable from "../Components/Client/ClientTable";
import { useState, useEffect } from "react";
import api from '../api/carlease'

function AllClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      const result = await api.get("client/");
      setClients(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Tous les clients</h2>
      <ClientTable clients={clients} refresh={getClients}/>
    </div>
  );
}

export default AllClients;
