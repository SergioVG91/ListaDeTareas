import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleCompleteTask, editTask } from '../actions';
import '../assets/styles/components/task.scss';
import DisplayTask from './DisplayTask';
import EditTask from './EditTask';

const Task = (props) => {
  const { task } = props;
  const [state, setState] = useState({ isEditable: false });
  const [form, setForm] = useState({
    title: task.title,
    content: task.content,
    initialHour: task.initialHour,
    finalHour: task.finalHour,
    isComplete: task.isComplete,
    days: ['all'],
    prioridad: 'alta',
    _id: task._id,
  });
  const handleInputs = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (taskId) => {
    props.deleteTask({ _id: taskId });
  };
  const handleIsComplete = (taskId) => {
    props.toggleCompleteTask({ _id: taskId });
  };
  const handleEdit = () => {
    setState({
      isEditable: !state.isEditable,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.editTask(form);
    handleEdit();
  };
  return (
    <div className="task">
      {state.isEditable ? (
        <EditTask
          form={form}
          buttonText="save"
          handleInputs={handleInputs}
          handleSubmit={handleSubmit}
        />
      ) : (
        <DisplayTask handleIsComplete={handleIsComplete} task={task} />
      )}
      <div className="task__button">
        <button type="button" onClick={() => handleDelete(task._id)}>
          X
        </button>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
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
