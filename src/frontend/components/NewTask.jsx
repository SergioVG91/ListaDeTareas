import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTask } from '../actions/tasksActions';
import '../assets/styles/components/newTask.scss';
import EditTask from './EditTask';

let fakeId = 100;

//Componente contenedor cuya responsabilidad es la logica y manejo de datos
const NewTask = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    initialHour: '',
    finalHour: '',
    isComplete: false,
    days: ['all'],
    priority: 'alta',
    _id: fakeId,
  });
  const handleInputs = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fakeId++;
    props.setTask(form);
  };
  return (
    <div className="task">
      <EditTask
        form={form}
        buttonText="+"
        handleInputs={handleInputs}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const mapDispatchToProps = {
  setTask,
};

export default connect(null, mapDispatchToProps)(NewTask);
