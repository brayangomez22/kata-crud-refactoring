import React, { useReducer, createContext } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import reducer from '../reducer/reducer';
import { Link } from 'react-router-dom';  

const initialState = { todo: { list: [], item: {} } };

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>
}

function ToDoPage() {
    return <StoreProvider>
        <h3 className="todoList"><Link to="/" className="btn-link">Home</Link>  / To-Do List</h3>
        <Form params={Store} />
        <List params={Store} />
    </StoreProvider>
}

export default ToDoPage;