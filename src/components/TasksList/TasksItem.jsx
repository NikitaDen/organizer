import React from "react";
import {connect} from "react-redux";
import {deleteTaskThunk, getTasksThunk, updateTaskThunk} from "../../redux/main-reducer";
import done from './../../assets/images/done.svg';


const TasksItem = (props) => {
    return (
        <div>
            {props.tasksList.map(task => {
                return (
                    <div className='todoitem' key={task.id}>
                        <input className='checkDone' id={`checkbox-${task.id}`} type="checkbox" onChange={() => props.updateTaskThunk(task.id, task.taskText, task.done)} checked={task.done}/>
                        <label htmlFor={`checkbox-${task.id}`}>
                            <img src={done} alt="+"/>
                        </label>
                        <p>{task.taskText}</p>
                        <button className='button button--delete' onClick={() => props.deleteTaskThunk(task.id)}>Delete</button>
                    </div>
                )
            }).reverse()}
        </div>
    )
};

export default TasksItem;