import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
//import NewTask from './NewTask';
import '../assets/styles/components/board.scss';

const mapTasks = (task) => {
  return <Task key={task._id} task={task} />;
};

const Board = ({ tasks }) => {
  tasks.sort((a, b) => a.initialHour - b.initialHour);
  return <div className="board">{tasks.map(mapTasks)}</div>;
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  };
};

export default connect(mapStateToProps, null)(Board);
//<NewTask />;
