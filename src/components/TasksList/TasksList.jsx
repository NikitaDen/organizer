import React from "react";
import {connect} from "react-redux";
import {deleteTaskThunk, getTasksThunk, updateTaskThunk} from "../../redux/main-reducer";
import TasksItem from "./TasksItem";


const TasksList = (props) => {

    return (
        <TasksItem {...props}/>
    )
};

let mapStateToProps = (state) => ({
    tasksList: state.main.tasksList,
});

export default connect(mapStateToProps, {deleteTaskThunk, getTasksThunk, updateTaskThunk})(TasksList);