
class MainApplication extends React.Component {
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

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </header>
    );
};

Header.defaultProps = {
    title: 'Some default title',
    subtitle: 'Some default subtitle'
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
        {props.tasks.length === 0 && <p>Please add task</p>}
            {
                props.tasks.map((task) => (
                    <Task key={task} taskText={task} handleDeleteTask={props.handleDeleteTask}/>
                ))
            }
        </div>
    );
};

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

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<MainApplication />, document.getElementById('app'));