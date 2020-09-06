import React, { useState, useEffect } from 'react'
import Task from '../components/Task'
import axios from 'axios'
import { TaskClass } from '../utils/TaskClass'

const MainContainer = () => {

    const [tasks, setTasks] = useState({});

    const URL = 'https://to-do-proyect.firebaseio.com/task.json';

    const getTasks = () => {
        axios.get(URL)
            .then((res) => setTasks(res.data))
            .catch((error) => alert(error))
    };

    const deleteTask = (id) => {
        axios.delete(`https://to-do-proyect.firebaseio.com/task/${id}.json`)
            .then(() => getTasks())
            .catch((error) => console.log(error))
    };

    const completeTask = (category, title, done, id) => {
        const currentTask = new TaskClass(category, title, done, id);
        axios.patch(URL, currentTask)
        .then(() => getTasks())
        .catch((error) => alert(error));
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <React.Fragment>
            
            <div className="container my-cont">
                {tasks
                    ? Object.keys(tasks).map((id) =>
                        <Task className="card"
                            key={id}
                            id={id}
                            title={tasks[id].title}
                            done={tasks[id].done}
                            category={tasks[id].category}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />)
                    : <h1>
                        No hay tareas disponibles
                            </h1>
                }
            </div>
        </React.Fragment>
    )
}

export default MainContainer
