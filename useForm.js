import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }

    const [formState, setFormState] = useState(initialForm);

    // esta desestructuracion no tiene sentido ya que no sabremos la cantidad de campos que tiene.
    //const {username: user, email: mail, password: passw} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value // entre corchetes situamos la propiedad que recibe el nombre del objeto del form que estamos modificado y le asignamos su valor.
        })

    };

    // Tarea: Resetear los valores del form
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        // ...formState, // desestructuramos todos los valores del form para enviarlos como parametros y así tener acceso a ellos.
        // Es mejor utilizar una forma o la otra (desestructuracion o pasar todo el objeto)
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
