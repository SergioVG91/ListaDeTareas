import axios from 'axios';
import {
  GET_TASKS,
  DELETE_TASK,
  TOGGLE_COMPLETE_TASK,
  SET_TASK,
  EDIT_TASK,
} from '../types/tasksTypes';

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const toggleCompleteTask = (payload) => ({
  type: TOGGLE_COMPLETE_TASK,
  payload,
});

export const setTask = (payload) => ({
  type: SET_TASK,
  payload,
});

export const editTask = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const getTasks = () => async (dispatch) => {
  const respuesta = await axios({
    url: 'https://chronos.sergiobuap7.now.sh/api/tasks',
    method: 'get',
  });
  dispatch({
    type: GET_TASKS,
    payload: respuesta.data.data,
  });
};
