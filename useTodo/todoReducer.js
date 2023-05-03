
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            // Devolvemos todos los todo que sean diferentes del que queremos eliminar. 
            // Podemos utilizar la función filter porque nos devuelve un nuevo objeto, no mutamos el initialState.
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                };
                return todo;
            });
        
        //case 'ABC':
        //    throw new Error('Action.type = ABC no está implementada'); // Mientras que tengamos pendiente implementarlo

            //return initialState;
                
        default:
            return initialState;
    }
}