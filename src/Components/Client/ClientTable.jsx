import React from "react";
import ClientRow from "./ClientRow";
import api from "../../api/carlease";
import Table from "../UI/Table";

function ClientTable(props) {
  const deleteHandler = async (client) => {
    console.log(client.id);
    try {
      await api.delete("/client/" + client.id);
      props.refresh();
    } catch (error) {}
  };

  return (
    <Table>
      <thead>
        <tr>
          <th >Prénom</th>
          <th >Nom</th>
          <th >Adresse</th>
          <th >Date de naissance</th>
          <th >Fidélité</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.clients.map((client) => {
          return (
            <ClientRow
              client={client}
              onDelete={deleteHandler}
              key={client.id}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default ClientTable;
