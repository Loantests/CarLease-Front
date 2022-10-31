import React from 'react'
import {createContext, useState} from 'react'

const MainContext = createContext({
    client: null,
    car: null,
    action: "",
    setClient: () => {},
    setCar: () => {},
    setAction: () => {},
})

export function MainContextProvider(props) {
    const [client, setClient] = useState();
    const [car, setCar] = useState();
    const [action, setAction] = useState();

    const context = {
        client: client,
        car: car,
        setClient: (client) => {
            setClient(client);
        },
        setCar: (car) => {
            setCar(car);
        },
        setAction: (action) => {
            setAction(action);
        }
    };
    
    return (
        <MainContext.Provider value={context}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContext;