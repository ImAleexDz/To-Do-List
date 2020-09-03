import React from 'react'

const Task = (props) => {

    const { title, done, category } = props;
    
    return (
        <div class="card">
            <div class="card-header">
                {title}
        </div>
            <div class="card-body">
                <h5 class="card-title">{done}</h5>
                <p class="card-text">{category}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Task
