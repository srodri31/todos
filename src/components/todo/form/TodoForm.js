import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            value: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} onChange={this.handleChange}></input>
                <input type="submit" value="Agregar"></input>
            </form>
        )
    }
}

export default TodoForm;