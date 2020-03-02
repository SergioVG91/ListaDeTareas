import { GET_TASKS, ERROR, LOADING, SAVE, EDIT_TASK, DELETE_TASK } from '../types/tasksTypes';

const INITIAL_STATE = {
  tasks: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return { ...state, tasks: action.payload, loading: false, error: '' };
    }
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case SAVE: {
      return { ...state, tasks: [], loading: false, error: '' };
    }
    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        }),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    }
    default:
      return state;
  }
};
