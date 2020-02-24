import React from 'react';
import '../assets/styles/components/editTask.scss';
import { FaSave } from 'react-icons/fa';
//Componente presentacional cuya responsabilidad es presentar el form
const EditTask = (props) => {
  const { form, handleInputs, handleSubmit } = props;
  return (
    <div className="edit-task">
      <form className="edit-task__form" onSubmit={handleSubmit}>
        <input
          className="edit-task__title"
          name="title"
          placeholder="Titulo"
          value={form.title}
          onChange={handleInputs}
        />
        <textarea
          className="edit-task__content"
          name="content"
          placeholder="Detalles de la actividad"
          value={form.content}
          onChange={handleInputs}
        />
        <input
          className="edit-task__initialHour"
          type="number"
          name="initialHour"
          placeholder="Hora inicial"
          value={form.initialHour}
          onChange={handleInputs}
        />
        <input
          className="edit-task__finalHour"
          type="number"
          name="finalHour"
          placeholder="Hora final"
          value={form.finalHour}
          onChange={handleInputs}
        />
        <button className="edit-task__submit" type="submit">
          <FaSave />
        </button>
      </form>
    </div>
  );
};

export default EditTask;
