import React from 'react';
import '../assets/styles/components/displayTask.scss';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
//FaPen, FaTrash, FaSave
//Componente presentacional cuya responsabilidad es presentar la información
const DisplayTask = (props) => {
  const { task, handleIsComplete } = props;
  return (
    <div className={task.isComplete ? 'display-task task__body--isComplete' : 'display-task'}>
      <div className="display-task__main">
        <div
          className="display-task__image"
          onClick={() => handleIsComplete(task._id, task.isComplete)}
          role="button"
          tabIndex="0"
        >
          {task.isComplete ? <FaRegCheckCircle /> : <FaRegCircle />}
        </div>
        <h2 className="display-task__title">{task.title}</h2>
      </div>

      <hr />
      <div className="display-task__hidden">
        <p className="display-task__time">
          Horario:
          {` ${Number(task.initialHour).toFixed(2)} a ${Number(task.finalHour).toFixed(2)}`}
        </p>
        <p className="display-task__content">{task.content}</p>
      </div>
    </div>
  );
};

export default DisplayTask;
// onClick={() => handleIsComplete(task._id)}
