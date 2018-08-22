import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor() {
        super();

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(event) {
        this.props.concatButtonValue(event.currentTarget.innerHTML);
    }

    render() {
        const buttonClasses = this.props.double ? "button double-button" : "button";
        
        return (
            <div className={buttonClasses} onClick={this.onButtonPress}>
                {this.props.buttonText}
            </div>
        );
    }
}

export default Button;