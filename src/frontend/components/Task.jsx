import React from 'react';
import '../assets/styles/components/task.scss';

const Task = (props) => {
  const { task } = props;
  return (
    <div className="note">
      <h2>{task.title}</h2>
      <p>{task.content}</p>
      <p>
        Horario:
        {` ${task.initialHour.toFixed(2)} a ${task.finalHour.toFixed(2)}`}
      </p>
    </div>
  );
};

export default Task;
