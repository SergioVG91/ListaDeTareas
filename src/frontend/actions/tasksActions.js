import axios from 'axios';
import { GET_TASKS, LOADING, ERROR, SAVE, EDIT_TASK, DELETE_TASK } from '../types/tasksTypes';

export const deleteTask = (taskId) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    await axios({
      url: `https://chronos.sergiobuap7.now.sh/api/tasks/${taskId}`,
      method: 'delete',
    });
    dispatch({
      type: DELETE_TASK,
      payload: { _id: taskId },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Error al eliminar la tarea',
    });
  }
};

export const toggleCompleteTask = (taskId, isComplete) => async (dispatch) => {
  console.log(taskId);
  dispatch({
    type: LOADING,
  });
  try {
    await axios({
      url: `https://chronos.sergiobuap7.now.sh/api/tasks/${taskId}`,
      method: 'put',
      data: {
        isComplete: !isComplete,
      },
    });
    const respuesta = await axios({
      url: `https://chronos.sergiobuap7.now.sh/api/tasks/${taskId}`,
      method: 'get',
    });
    dispatch({
      type: EDIT_TASK,
      payload: respuesta.data.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Error al terminar la tarea',
    });
  }
};

export const setTask = (newTask) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    await axios({
      url: 'https://chronos.sergiobuap7.now.sh/api/tasks',
      method: 'post',
      data: newTask,
    });
    dispatch({
      type: SAVE,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Error al agregar la tarea',
    });
  }
};

export const editTask = (taskId, formEdit) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    await axios({
      url: `https://chronos.sergiobuap7.now.sh/api/tasks/${taskId}`,
      method: 'put',
      data: formEdit,
    });
    const respuesta = await axios({
      url: `https://chronos.sergiobuap7.now.sh/api/tasks/${taskId}`,
      method: 'get',
    });
    dispatch({
      type: EDIT_TASK,
      payload: respuesta.data.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Error al actualizar la tarea',
    });
  }
};

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const respuesta = await axios({
      url: 'https://chronos.sergiobuap7.now.sh/api/tasks',
      method: 'get',
    });
    dispatch({
      type: GET_TASKS,
      payload: respuesta.data.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Error al obtener las tareas',
    });
  }
};

// case DELETE_TASK: {
//   return {
//     ...state,
//     tasks: state.tasks.filter((task) => task._id !== action.payload._id),
//   };
// }
// case TOGGLE_COMPLETE_TASK: {
//   return {
//     ...state,
//     tasks: state.tasks.map((task) => {
//       if (task._id === action.payload._id) {
//         return {
//           ...task,
//           isComplete: !task.isComplete,
//         };
//       }
//       return task;
//     }),
//   };
// }

// case EDIT_TASK: {
//   return {
//     ...state,
//     tasks: state.tasks.map((task) => {
//       if (task._id === action.payload._id) {
//         return action.payload;
//       }
//       return task;
//     }),
//   };
// }
