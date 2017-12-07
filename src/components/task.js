import React from 'react';

const Task = (props) => {
    return (
        <div>
        {props.taskText}
        <button 
            onClick={(e) => {
                props.handleDeleteTask(props.taskText);
            }}
            >
            delete
            </button>
        </div>
    );
};

export default Task;