import React from 'react';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddTask(e) {
        e.preventDefault();

        const task = e.target.elements.task.value.trim();
        const error = this.props.handleAddTask(task);
        
        this.setState(() => ({error}));

        if(!error) {
            
            e.target.elements.task.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddTask}>
                    <input type="text" name="task" />
                    <button>Add task</button>
                </form>
            </div>
        );
    }


}