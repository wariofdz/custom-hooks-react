import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //Si recargamos y no tiene info, no aparecerá nada.
}

export const useTodo = (initialState = []) => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init); 
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const handleNewTodo = (todo) => {
        
        const addTodoAction = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(addTodoAction);  
    };

    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });

    }

    const handleToggleTodo = (id) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });

    }

    //Podemos crearlas como variables y pasarlas o directamente poner la logica en el return.
    //const todosCount = todos.length;
    //const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    };

};