import React from 'react';

import Board from '../components/Board';
import '../assets/styles/components/inicio.scss';

const Inicio = () => (
  <div className="inicio">
    <div className="inicio__contenedor"> </div>
    <div className="inicio__board">
      <Board />
    </div>
  </div>
);

export default Inicio;
