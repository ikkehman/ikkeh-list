import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Task = ({ Tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return Tasks.map((Task, index) => (
    <div
      className={Task.isComplete ? 'Task-row complete' : 'Task-row'}
      key={index}
    >
      <div className='List-name' key={Task.id} onClick={() => completeTask(Task.id)}>
        {Task.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTask(Task.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: Task.id, value: Task.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Task;
