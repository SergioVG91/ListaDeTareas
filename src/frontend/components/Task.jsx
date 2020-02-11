import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleCompleteTask } from '../actions';
import '../assets/styles/components/task.scss';

const Task = (props) => {
  const { task } = props;
  const handleDelete = (taskId) => {
    props.deleteTask({ taskId });
  };
  const handleIsComplete = (taskId) => {
    props.toggleCompleteTask({ taskId });
  };
  return (
    <div className="task">
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
      <div className="task__button">
        <button type="button" onClick={() => handleDelete(task._id)}>
          X
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTask,
  toggleCompleteTask,
};

export default connect(null, mapDispatchToProps)(Task);
