import React from 'react';

const EditTask = (props) => {
  const { form, handleInputs, handleSubmit, buttonText } = props;
  return (
    <div className="editTask">
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
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default EditTask;
