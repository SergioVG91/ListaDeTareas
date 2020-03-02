import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';
import '../assets/styles/components/inicio.scss';
import { getTasks } from '../actions/tasksActions';

const Inicio = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  props.getTasks();
  return (
    <div className="inicio">
      <div className="inicio__contenedor"> </div>
      <div className="inicio__board">
        <Board />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getTasks,
};

export default connect(null, mapDispatchToProps)(Inicio);
