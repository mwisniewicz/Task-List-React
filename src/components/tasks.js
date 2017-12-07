import React from 'react';
import Task from './task';

const Tasks = (props) => {
    return (
        <div>
        
        <button onClick={props.handleDeleteTasks}>Reset</button>
        {props.tasks.length === 0 && <p>Please add task</p>}
            {
                props.tasks.map((task) => (
                    <Task key={task} taskText={task} handleDeleteTask={props.handleDeleteTask}/>
                ))
            }
        </div>
    );
};

export default Tasks;