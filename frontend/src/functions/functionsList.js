import swal from 'sweetalert2';
import {HOST_API} from '../context/context';

export const onChange = (event, todo, dispatch) => {
    const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
    };
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
        });
};

export const onEdit = (todo, dispatch) => {
    swal.fire({
        title: "¡OJO!",
        text: "¿Estas seguro de editar este To-Do?",
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, editar",
        confirmButtonColor: "#0a79df",
        cancelButtonColor: "#dc2a2a"
    })
    .then(resultado => {
        if (resultado.value) {
            dispatch({ type: "edit-item", item: todo })
        } 
    });
};

export const onDelete = (id, dispatch) => {
    swal.fire({
        title: "¡OJO!",
        text: "¿Estas seguro de eliminar este To-Do?",
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, eliminar",
        confirmButtonColor: "#0a79df",
        cancelButtonColor: "#dc2a2a"
    })
    .then(resultado => {
        if (resultado.value) {
            fetch(HOST_API + "/" + id + "/todo", {
                method: "DELETE"
            }).then((list) => {
                dispatch({ type: "delete-item", id })
            })
        } 
    });
};