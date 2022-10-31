import React from 'react'
import api from '../../api/carlease'
import Table from '../UI/Table';
import ContractItem from './ContractItem';

function ContractList(props) {
  const deleteHandler = async (contract) => {
    console.log(contract.id)
    try {
      await api.delete("/contracts/" + contract.id);
      props.refresh();
    } catch (error) {}
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Avance</th>
          <th>Reste à payer</th>
          <th>Prix total</th>
          <th>Lieu de retour</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.contracts.map(contract => {
          return (
            <ContractItem contract={contract}
            onDelete={deleteHandler}
            key={contract.id}
            />
          );
        })}
      </tbody>
    </Table>
  )
}

export default ContractList