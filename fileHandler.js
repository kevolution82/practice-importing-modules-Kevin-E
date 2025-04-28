// fileHandler.js

const fs = require('fs');

function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function loadTasks(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } else {
    return [];
  }
}

module.exports = {
  saveTasks,
  loadTasks
};
