'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainApplication = function (_React$Component) {
    _inherits(MainApplication, _React$Component);

    function MainApplication(props) {
        _classCallCheck(this, MainApplication);

        var _this = _possibleConstructorReturn(this, (MainApplication.__proto__ || Object.getPrototypeOf(MainApplication)).call(this, props));

        _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddTask = _this.handleAddTask.bind(_this);
        _this.state = {
            tasks: ['Task1', 'Taks2', 'Task33']
        };
        return _this;
    }

    _createClass(MainApplication, [{
        key: 'handleDeleteTasks',
        value: function handleDeleteTasks() {
            this.setState(function () {
                return {
                    tasks: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.tasks.length);
            var task = this.state.tasks[randomNumber];
            alert(task);
        }
    }, {
        key: 'handleAddTask',
        value: function handleAddTask(task) {
            if (!task) {
                return 'Enter valid value';
            } else if (this.state.tasks.indexOf(task) > -1) {
                return 'This task already exist';
            }

            this.setState(function (prevState) {
                return {
                    tasks: prevState.tasks.concat(task)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "React Task Manager";
            var subtitle = "by MW";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Navigation, null),
                React.createElement(Action, {
                    hasTasks: this.state.tasks.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Tasks, {
                    tasks: this.state.tasks,
                    handleDeleteTasks: this.handleDeleteTasks
                }),
                React.createElement(AddTask, {
                    handleAddTask: this.handleAddTask
                })
            );
        }
    }]);

    return MainApplication;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h3',
            null,
            props.subtitle
        )
    );
};

var Navigation = function Navigation(props) {
    return React.createElement(
        'nav',
        null,
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'Home'
            ),
            React.createElement(
                'li',
                null,
                'Contact'
            )
        )
    );
};

var Tasks = function Tasks(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteTasks },
            'Reset'
        ),
        props.tasks.map(function (task) {
            return React.createElement(Task, { key: task, taskText: task });
        })
    );
};

var Task = function Task(props) {
    return React.createElement(
        'div',
        null,
        props.taskText
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasTasks
            },
            'What I should do?'
        )
    );
};

var AddTask = function (_React$Component2) {
    _inherits(AddTask, _React$Component2);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        var _this2 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

        _this2.handleAddTask = _this2.handleAddTask.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddTask, [{
        key: 'handleAddTask',
        value: function handleAddTask(e) {
            e.preventDefault();

            var task = e.target.elements.task.value.trim();
            var error = this.props.handleAddTask(task);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddTask },
                    React.createElement('input', { type: 'text', name: 'task' }),
                    React.createElement(
                        'button',
                        null,
                        'Add task'
                    )
                )
            );
        }
    }]);

    return AddTask;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(MainApplication, null), document.getElementById('app'));
