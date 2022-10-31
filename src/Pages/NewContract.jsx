import React from "react";
import NewContractForm from "../Components/Contracts/NewContractForm";

function NewContract() {
  
  //useEffect(() => {
  //  context.setClient(null);
  //  context.setCar(null);
  //}, []);

  return (
    <div>
      <NewContractForm />
    </div>
  );
}

export default NewContract;