import * as axios from "axios";

const GET_TASKS = 'GET_TASKS';
const SET_NEW_TASK = 'SET_NEW_TASK';
const SET_DONE = 'SET_DONE';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    tasksList: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasksList: [...action.tasks]
            };
        case SET_NEW_TASK:
            return {
                ...state,
                tasksList: [...state.tasksList, action.newTask]
            };
        case SET_DONE:
            return {
                ...state,
                tasksList: state.tasksList.map(task => {
                    if (task.id === action.id) {
                        return {
                            ...task,
                            done: !action.done
                        }
                    }
                    return task
                })
            };
        case DELETE_TASK:
            return {
                ...state,
                tasksList: state.tasksList.filter(task => task.id !== action.id)
            };
        default:
            return state;
    }
};

export const getTask = (tasks) => ({type: GET_TASKS, tasks});
export const setNewTask = (newTask) => ({type: SET_NEW_TASK, newTask});
export const setDone = (id, done) => ({type: SET_DONE, id, done});
export const deleteTask = (id) => ({type: DELETE_TASK, id});

export const getTasksThunk = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/tasks/');
    dispatch(getTask(response.data));
};

export const setNewTaskThunk = (newTask) => async (dispatch) => {
    let response = await axios.post('http://localhost:3000/tasks/', {
        taskText: newTask,
        done: false
    });
    dispatch(setNewTask(response.data));
};

export const updateTaskThunk = (id, text, done) => async (dispatch) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
        taskText: text,
        done: !done
    });
    dispatch(setDone(id, done));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    dispatch(deleteTask(id));
};

export default mainReducer;