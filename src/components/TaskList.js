import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  const [Tasks, setTasks] = useState([]);

  const addTask = Task => {
    if (!Task.text || /^\s*$/.test(Task.text)) {
      return;
    }

    const newTasks = [Task, ...Tasks];

    setTasks(newTasks);
    console.log(...Tasks);
  };

  const updateTask = (TaskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTasks(prev => prev.map(item => (item.id === TaskId ? newValue : item)));
  };

  const removeTask = id => {
    const removedArr = [...Tasks].filter(Task => Task.id !== id);

    setTasks(removedArr);
  };

  const completeTask = id => {
    let updatedTasks = Tasks.map(Task => {
      if (Task.id === id) {
        Task.isComplete = !Task.isComplete;
      }
      return Task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>[ To Do List ]</h1>
      <p></p>
      <TaskForm onSubmit={addTask} />
      <Task
        Tasks={Tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default TaskList;
