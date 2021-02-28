import React, { useContext, useEffect } from 'react';
import {onChange, onEdit, onDelete} from '../functions/functionsList';
import {HOST_API} from '../context/context';

const List = (params) => {
    const Store=params.params;
    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;

    useEffect(() => {
        fetch(HOST_API + "/todos")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list", list })
            })
    }, [dispatch]);

    const decorationDone = {
        textDecoration: 'line-through'
    };

    return <div>
        <table>
            <thead>
                <tr>
                    <td className="gomez">ID</td>
                    <td className="gomez">Tarea</td>
                    <td className="gomez">¿Completado?</td>
                    <td className="gomez">Acciones</td>
                </tr>
            </thead>
            <tbody>
                {currentList.map((todo) => {
                    return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo, dispatch)}></input></td>
                        <td><button className="button edit" onClick={() => onDelete(todo.id, dispatch)}>Eliminar</button></td>
                        {!todo.completed &&<td><button className="button delete" onClick={() => onEdit(todo, dispatch)}>Editar</button></td>}
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default List;