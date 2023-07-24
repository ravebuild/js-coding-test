const Project = require('../src/Project');

describe('the Project class', () => {
    it('has its name set correctly', () => {
        const project = new Project('Test project');
    
        expect(project.name).toBe('Test project');
    });
    
    it('has the expected number of tasks when they are added', () => {
        const project = new Project('Test project');
    
        project.addTask(0, 'Book pre-wrap inspection');
        project.addTask(1, 'Garage door install');
        project.addTask(2, 'Appliance Delivery');
    
        expect(project.tasks.length).toBe(3);
    });
    
    it('returns the correct Task from getTask(id)', () => {
        const project = new Project('Test project');
        project.addTask(0, 'Book pre-wrap inspection');
        project.addTask(1, 'Garage door install');

        const task = project.getTask(1);
    
        expect(task).toBe('Garage door install');
    });
    
    it('deletes the correct Task from deleteTask(id)', () => {
        const project = new Project('Test project');
        project.addTask(0, 'Book pre-wrap inspection');
        project.addTask(1, 'Garage door install');

        project.deleteTask(1);
    
        expect(project.tasks.length).toBe(1);
    });
});
