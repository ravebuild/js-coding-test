const Project = require('./Project');

const project = new Project('Test project');
console.log('Created project ' + project.name);
console.log('Project has ' + project.tasks.length + ' tasks');

console.log('Adding tasks to the project');
project.addTask(0, 'Book pre-wrap inspection');
project.addTask(1, 'Garage door install');
project.addTask(2, 'Appliance Delivery');

console.log('Project has ' + project.tasks.length + ' tasks');
console.log('Task with id[1] is ' + project.getTask(1));

console.log('Deleting task with id[1]');
project.deleteTask(1);
console.log('project has ' + project.tasks.length + ' tasks, expected to see 2');
