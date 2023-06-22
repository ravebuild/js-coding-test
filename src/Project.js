class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(id, name) {
        this.tasks.push({ id, name });
    }

    findTask(id) {
        return this.tasks[id];
    }

    deleteTask(id) {
        // not yet implemented
    }
}

module.exports = Project;
