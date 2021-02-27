import React, { useContext, useRef, useState } from 'react';
import swal from 'sweetalert2';
const HOST_API="http://localhost:8080/api";

const Form = (params) => {
    const Store=params.params;
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            name: state.name,
            id: null,
            completed: false
        };

        if (request.name !== undefined && request.name !== "") {
            if (request.name.length > 4) {
                fetch(HOST_API + "/todo", {
                    method: "POST",
                    body: JSON.stringify(request),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then((todo) => {
                        dispatch({ type: "add-item", item: todo });
                        setState({ name: "" });
                        formRef.current.reset();
                    });
            } else {
                swal.fire({
                    title: "Tarea no registrada",
                    text: "Su tarea debe tener mínimo 5 carácteres",
                    icon: "error",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332",
                });
            }
        } else {
            swal.fire({
                title: "Tarea no registrada",
                text: "Debe especificar un nombre para la tarea",
                icon: "error",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332",
            });
        }
    }

    const onEdit = (event) => {
        event.preventDefault();

        const request = {
            name: state.name,
            id: item.id,
            isCompleted: item.isCompleted
        };

        if (request.name !== "" && request.name !== undefined) {
            if (request.name.length > 4) {
                fetch(HOST_API + "/todo", {
                    method: "PUT",
                    body: JSON.stringify(request),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then((todo) => {
                        dispatch({ type: "update-item", item: todo });
                        setState({ name: "" });
                        formRef.current.reset();
                    });
            } else {
                swal.fire({
                    title: "Tarea no registrada",
                    text: "Su tarea debe tener mínimo 5 carácteres",
                    icon: "error",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332",
                });
            }
        } else {
            swal.fire({
                title: "Tarea no actualizada",
                text: "Debe realizar mínimo un cambio",
                icon: "error",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332",
            });
        }
    }

    return <form ref={formRef} className="container">
        <h2 className="title titleCreate">Create To-Do</h2>
        <div className="containerCreateTodo">
            <input
                type="text"
                name="name"
                placeholder="¿Qué piensas hacer hoy?"
                defaultValue={item.name}
                className="inputTodo"
                onChange={(event) => {
                    setState({ ...state, name: event.target.value })
                }}  ></input>

            <div className="containerButtons">
                {item.id && <button className="buttons buttonUpdate"  onClick={onEdit}><span>Actualizar</span><div className="liquid"></div></button>}
                {!item.id && <button className="buttons" onClick={onAdd}><span>Crear</span><div className="liquid"></div></button>}
            </div>
        </div>
    </form>
}

export default Form;