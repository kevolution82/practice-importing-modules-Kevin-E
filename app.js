// app.js

const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

//put the new path here, the .json file
const filePath = path.join(__dirname, 'tasks.json');

// this is loading them
let tasks = fileHandler.loadTasks(filePath);

// this adds them
taskManager.addTask(tasks, 'Finish this coding assignment in this breakout room with classmates');
taskManager.addTask(tasks, 'Going to the grocery store for beef jerky');

// this lists them
taskManager.listTasks(tasks);

// this saves them & creates the json
fileHandler.saveTasks(filePath, tasks);
