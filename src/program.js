const Project = require('./Project');
/**
 * If you would like to test the code by running it directly, you can easily do
 * so in this file.
 */
const project = new Project('Test project');
project.addTask(0, 'Book pre-wrap inspection');

console.log(JSON.stringify(project, null, 2));
