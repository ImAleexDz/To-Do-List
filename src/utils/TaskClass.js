class TaskClass {
    constructor(category, title, done, id) {
        this[id] = {
            category : category,
            title : title,
            done : done
        }
        
    }
}

// const ejemplo = new TaskClass('hogar', 'tarea', true, sjodfnos)

module.exports = { TaskClass };