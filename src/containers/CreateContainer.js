import React from 'react'
import CreateForm from '../components/CreateForm'
import { TaskClass } from '../utils/TaskClass'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const CreateContainer = () => {
    const URL = 'https://to-do-proyect.firebaseio.com/task.json';
    const history = useHistory();

    const createTask = (category, title) => {
        const newTask = new TaskClass(category, title, false, 'a');
        axios.post(URL, newTask.a)
            .then(() => history.push('./'))
            .catch((error) => alert(error))
    };

    return (
        <div className="container">
            <CreateForm createTask={createTask} />
        </div>
    )
}

export default CreateContainer
