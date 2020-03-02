import {
  GET_TASKS,
  DELETE_TASK,
  TOGGLE_COMPLETE_TASK,
  SET_TASK,
  EDIT_TASK,
} from '../types/tasksTypes';

const INITIAL_STATE = {
  tasks: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return { ...state, tasks: action.payload };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    }
    case TOGGLE_COMPLETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return {
              ...task,
              isComplete: !task.isComplete,
            };
          }
          return task;
        }),
      };
    }
    case SET_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
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
    default:
      return state;
  }
};
