class MainApplication extends React.Component {
    render () {
        return (
            <VisibilityToggle />
        );
    }
}

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility () {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }; 
        });
        }

    render() {
        return (
            <div>
                <p>dsdsdsdsd</p>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div><p>Hidden text</p>
                    </div>
                )}
            </div>
        );
    }


}

ReactDOM.render(<MainApplication />, document.getElementById('app'));