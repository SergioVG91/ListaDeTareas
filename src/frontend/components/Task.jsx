import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaTimesCircle, FaRegEdit, FaTrash } from 'react-icons/fa';
import { deleteTask, toggleCompleteTask, editTask } from '../actions/tasksActions';
import '../assets/styles/components/task.scss';
import DisplayTask from './DisplayTask';
import EditTask from './EditTask';

//Componente contenedor cuya responsabilidad es la logica y manejo de datos
const Task = (props) => {
  const { task } = props;
  const [state, setState] = useState({
    isEditable: false,
    loading: false,
    error: null,
    _id: task._id,
    form: {
      title: task.title,
      content: task.content,
      initialHour: task.initialHour,
      finalHour: task.finalHour,
      isComplete: task.isComplete,
      //  days: ['all'],
      priority: 'alta',
    },
  });
  const handleInputs = (event) => {
    console.log(state);
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleDelete = (taskId) => {
    props.deleteTask(taskId);
  };
  const handleIsComplete = (taskId, taskIsComplete) => {
    props.toggleCompleteTask(taskId, taskIsComplete);
    setState({
      ...state,
      form: {
        ...state.form,
        isComplete: !taskIsComplete,
      },
    });
  };
  const handleEdit = () => {
    setState({
      ...state,
      isEditable: !state.isEditable,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.editTask(state._id, state.form);
    handleEdit();
  };
  return (
    <div className="task">
      <div className="task__container">
        <div className="task__edit">
          {state.isEditable ? (
            <FaTimesCircle onClick={handleEdit} />
          ) : (
            <FaRegEdit onClick={handleEdit} />
          )}
        </div>
        {state.isEditable ? (
          <EditTask form={state.form} handleInputs={handleInputs} handleSubmit={handleSubmit} />
        ) : (
          <DisplayTask handleIsComplete={handleIsComplete} task={task} />
        )}
        <div className="task__delete">
          <FaTrash onClick={() => handleDelete(task._id)} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTask,
  toggleCompleteTask,
  editTask,
};

export default connect(null, mapDispatchToProps)(Task);
