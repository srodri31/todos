import React, { Component } from 'react';
import Button from './Button';

class EditableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            value: this.props.text
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.state);
        this.setState({
            isEditable: false
        })
    }
    
    render(){
        const isEditable = this.state.isEditable;
        if(isEditable) {
            return(
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="Guardar"></input>
                </form>
            );
        } else {
            return(
                <span>
                    {this.props.text} 
                    <Button onClick={this.changeStatus} text="Editar" />
                </span>
            );
        }
    }
}

export default EditableText;