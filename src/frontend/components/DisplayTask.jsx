import React from 'react';

const DisplayTask = (props) => {
  const { task, handleIsComplete } = props;
  return (
    <div
      className={task.isComplete ? 'task__body--isComplete' : undefined}
      onClick={() => handleIsComplete(task._id)}
      role="button"
      tabIndex="0"
    >
      <h2>{task.title}</h2>
      <p>{task.content}</p>
      <p>
        Horario:
        {` ${Number(task.initialHour).toFixed(2)} a ${Number(task.finalHour).toFixed(2)}`}
      </p>
    </div>
  );
};

export default DisplayTask;
