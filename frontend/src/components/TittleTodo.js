import React from 'react';
import { Link } from 'react-router-dom';

const TittleTodo = () => {
    return <h3 className="todoList"><Link to="/" className="btn-link">Home</Link>  / To-Do List</h3>
}
export default TittleTodo;