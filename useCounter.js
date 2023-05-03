import { useState } from 'react';

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if(counter === 0) return; // la logica del negocio la tenemos aquí, no en el componente.
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }

};