import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTask } from '../actions';
import '../assets/styles/components/newTask.scss';

let fakeId = 100;

const NewTask = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    initialHour: '',
    finalHour: '',
    isComplete: false,
    days: ['all'],
    prioridad: 'alta',
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
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Titulo" value={form.title} onChange={handleInputs} />
        <textarea
          name="content"
          placeholder="Detalles de la actividad"
          value={form.content}
          onChange={handleInputs}
        />
        <input
          type="number"
          name="initialHour"
          placeholder="Hora inicial"
          value={form.initialHour}
          onChange={handleInputs}
        />
        <input
          type="number"
          name="finalHour"
          placeholder="Hora final"
          value={form.finalHour}
          onChange={handleInputs}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setTask,
};

export default connect(null, mapDispatchToProps)(NewTask);
