import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Eat', 'Code', 'Sleep']);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Ice Blue To-Do</h1>

      
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      
      <ul className="list-group mb-3">
        {tasks.map((t, i) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={i}
          >
            {t}
            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

     
      {tasks.length > 0 && (
        <div className="text-center">
          <button className="btn btn-outline-danger" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
