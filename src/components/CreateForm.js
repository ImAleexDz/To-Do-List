import React, { useState } from 'react'
import './form.css'

const CreateForm = (props) => {
    const { createTask } = props

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const titleHandler = (e) => {
        setTitle(e.target.value)
    };

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    };

    const submitForm = () => {
        if (category !== '' && title !== '') {
            createTask(category, title)
        } else {
            alert('Debes llenar todos los campos')
        }
    };

    return (
        <div className="my-form mt-5">
            <div className="form-group">
                <label htmlFor="title">Tarea</label>
                <input type="text" className="form-control" onChange={titleHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <input type="text" className="form-control" onChange={categoryHandler} />
            </div>
            <button className="btn btn-secondary" onClick={submitForm} >Agregar</button>
        </div>
    )
}

export default CreateForm
