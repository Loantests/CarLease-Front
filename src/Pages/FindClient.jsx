import React, { useState } from "react";
import ClientItem from "../Components/Client/ClientItem";
import FindClientForm from "../Components/Client/FindClientForm";

function FindClient() {
  const [client, setClient] = useState(null);

  const findClient = (findedClient) => {
    setClient(findedClient);
  };
 
  return (
    <div>
      <FindClientForm setClient={findClient} />
      {client && <ClientItem client={client}/>}
    </div>
  );
}

export default FindClient;
