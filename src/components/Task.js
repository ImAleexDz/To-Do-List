import React from 'react'
import './task.css'
import { Container, Row, Col } from 'react-bootstrap';

const Task = (props) => {

    const { title, done, category, id, deleteTask } = props;

    return (
        <div class="my-card mt-5">
            <div class="card-header header">{title}</div>
            <div class="card-body">
                <h5 class="card-title">{done}</h5>
                <p class="card-text">{category}</p>
                <button class="btn btn-primary complete">Completar</button>
                <button class="btn btn-danger delete" onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Task
