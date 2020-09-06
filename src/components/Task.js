import React from 'react'
import './task.css'

const Task = (props) => {

    const { title, done, category, id, deleteTask, completeTask } = props;

    return (
        <div className="my-card mt-5">
            <div className="card-header header">{title}</div>
            <div className="card-body">
                <h5 className="card-title">{done}</h5>
                <p className="card-text">{category}</p>
                { done 
                ? <button className="btn btn-secondary complete" onClick={() =>  completeTask(category, title, false, id)}>Deshacer</button> 
                : <button className="btn btn-primary complete" onClick={() =>  completeTask(category, title, true, id)}>Completar</button> }
                
                <button className="btn btn-danger delete" onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Task
