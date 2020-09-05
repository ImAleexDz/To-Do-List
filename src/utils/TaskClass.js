class TaskClass {
    constructor(category, title, done, id) {
        this[id] = {
            category = category,
            title = title,
            done = false,
        }
        
    }

    setTask(res) {
        this.tasks = res;
    }
}

const ejemplo = new TaskClass('hogar', 'tarea', true, sjodfnos)

module.exports = { Task };