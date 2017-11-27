
class MainApplication extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.state = {
            tasks: ['Task1', 'Taks2', 'Task33']
        };
    }

    handleDeleteTasks() {
        this.setState(() => {
            return {
                tasks: []
            };
        });
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

        this.setState((prevState) => {
            return {
                tasks : prevState.tasks.concat(task)
            };
        });
    }

    render() {
        const title = "React Task Manager";
        const subtitle = "by MW";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Navigation />
                <Action 
                    hasTasks={this.state.tasks.length > 0}
                    handlePick={this.handlePick}
                    />
                <Tasks 
                    tasks={this.state.tasks}
                    handleDeleteTasks={this.handleDeleteTasks}
                    />
                <AddTask 
                    handleAddTask={this.handleAddTask}    
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </header>
    );
};

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

const Tasks = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteTasks}>Reset</button>
            {
                props.tasks.map((task) => <Task key={task} taskText={task}/>)
            }
        </div>
    );
};

const Task = (props) => {
    return (
        <div>
        {props.taskText}
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasTasks}
                >What I should do?</button>
        </div>
    );
};


class AddTask extends React.Component {
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

        this.setState(() => {
            return {
                error: error
            };
        });
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

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<MainApplication />, document.getElementById('app'));