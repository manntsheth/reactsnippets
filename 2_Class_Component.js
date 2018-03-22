class Button extends React.Component {
    state = {counter:0};

    render() {
        return (<button> {this.state.counter} </button>);
    }
}

ReactDOM.render(< Button label="Do" />, mountNode);