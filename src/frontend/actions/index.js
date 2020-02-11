export const deleteTask = (payload) => ({
  type: 'DELETE_TASK',
  payload,
});

export const toggleCompleteTask = (payload) => ({
  type: 'TOGGLE_COMPLETE_TASK',
  payload,
});

export const setTask = (payload) => ({
  type: 'SET_TASK',
  payload,
});

export const editTask = (payload) => ({
  type: 'EDIT_TASK',
  payload,
});
