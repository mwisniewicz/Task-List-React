import React from 'react';
import AddTask from './addTask';
import Header from './header';
import Action from './action';
import Navigation from './navigation';
import Tasks from './tasks';

export default class MainApplication extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.state = {
            tasks: props.tasks
        };
    }
    // method runs when component is mounted
    componentDidMount() {
        try {
            const json = localStorage.getItem('tasks');
            const tasks = JSON.parse(json);
            if (tasks) {
                this.setState(() => ({ tasks: tasks }))
            }

        } catch(e) {
            // do nothing at all - catch for some errors
        }
    }
    // method runs when component is updating
    componentDidUpdate(prevProps,prevState) {
        
        if (prevState.tasks.length !== this.state.tasks.length) {
            console.log('Saving data');
            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks', json);
        }
    }

    componentWillUnmount() {
        console.log('comp will unmount');
    }

    handleDeleteTasks() {

        this.setState(() => ({ tasks: [] }));
    }

    handleDeleteTask(taskToRemove) {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => {
                return taskToRemove !== task;
            })
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.tasks.length);
        const task = this.state.tasks[randomNumber];
        alert(task);
    }

    handleAddTask(task) {
        if (!task) {
            return 'Enter valid value';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'This task already exist';
        }

        this.setState((prevState) => ({ tasks: prevState.tasks.concat(task) }));
    }

    render() {
        const title = "React Task Manager";
        const subtitle = "by MW";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Navigation />
                <Action 
                    hasTasks={this.state.tasks.length > 0}
                    handlePick={this.handlePick}
                    />
                <Tasks 
                    tasks={this.state.tasks}
                    handleDeleteTasks={this.handleDeleteTasks}
                    handleDeleteTask={this.handleDeleteTask}
                    />
                <AddTask 
                    handleAddTask={this.handleAddTask}    
                />
            </div>
        );
    }
}

MainApplication.defaultProps = {
    tasks: ['sdsdsd']
};
