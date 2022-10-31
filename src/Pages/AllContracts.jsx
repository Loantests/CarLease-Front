import React from "react";
import { useState, useEffect } from "react";
import api from "../api/carlease";
import ContractList from "../Components/Contracts/ContractList";

function AllContracts() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    getContracts();
  }, []);

  const getContracts = async () => {
    try {
      const result = await api.get("contracts");
      setContracts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Tous les contrats</h2>
      <ContractList contracts={contracts} refresh={getContracts} />
    </div>
  );
}

export default AllContracts;
