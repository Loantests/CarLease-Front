import React, { useState } from 'react'
import CarItem from '../Components/Cars/CarItem';
import FindCarForm from '../Components/Cars/FindCarForm'

function FindCar() {

const [car, setCar] = useState(null);

const updateCar = (findedCar) => {
    setCar(findedCar)
}

  return (
    <div>
        <FindCarForm setCar={updateCar}/>
        {car && <CarItem car={car}/>}
        
    </div>
  )
}

export default FindCar