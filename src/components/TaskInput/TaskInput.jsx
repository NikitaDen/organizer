import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getTasksThunk, setNewTask, setNewTaskThunk} from "../../redux/main-reducer";


const TaskInput = (props) => {

    let [taskText, setTaskText] = useState('');

    useEffect(() => {
        props.getTasksThunk();
    }, []);

    const setNewTask = () => {
        props.setNewTaskThunk(taskText);
        setTaskText('');
    };

    return (
        <div className='todolist'>
            <input className='todolist__input' value={taskText} onChange={e => setTaskText(e.currentTarget.value)} type="text"/>
            <button className='button button--add' onClick={setNewTask}>Add task</button>
        </div>
    )
};

export default connect(null, {setNewTask, getTasksThunk, setNewTaskThunk})(TaskInput);