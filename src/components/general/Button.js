import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        let id = this.props.id;
        if (id === null) {
            this.props.onClick();
        } else {
            this.props.onClick(this.props.id);
        }
    }

    render(){
        return (
            <button onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

export default Button;