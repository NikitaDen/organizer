import React from 'react';
import './assets/styles/styles.scss';
import TaskInput from "./components/TaskInput/TaskInput";
import TasksList from "./components/TasksList/TasksList";


function App() {

    return (
        <div className="App">
            <div className='wrapper'>
                <TaskInput/>
                <TasksList/>
            </div>

        </div>
    );
}

export default App;
