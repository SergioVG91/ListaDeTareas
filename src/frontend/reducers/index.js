const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload.taskId),
      };
    }
    case 'TOGGLE_COMPLETE_TASK': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload.taskId) {
            return {
              ...task,
              isComplete: !task.isComplete,
            };
          }
          return task;
        }),
      };
    }
    case 'SET_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    default:
      return state;
  }
};
export default reducer;
