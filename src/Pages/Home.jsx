import React, { useEffect, useState } from 'react'
import api from '../api/carlease'

function Home() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      const result = await api.get("client");
      setClients(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default Home