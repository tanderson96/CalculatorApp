import React, { Component } from 'react';
import './Calculator.css';
import buttons from '../../Buttons';
import Button from '../Button/Button';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {input: ''};

    this.concatButtonValue = this.concatButtonValue.bind(this);
  }

  concatButtonValue(val) {
    const {input} = this.state;
    
    if (val === buttons.equals) {
      this.setState({input: eval(input)})
      return;
    }

    if (val === buttons.ac) {
      this.setState({input: ''});
      return;
    }

    this.setState({input: input + val});
  }

  render() {
    console.log(buttons.ac);
    return (
      <div className="calculator">
        <input className="display" value={this.state.input} readOnly/>
        <div className="row">
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.ac} onClick={this.clearInput}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.negate}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.percent}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.division}/>
        </div>
        <div className="row">
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.seven}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.eight}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.nine}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.multiply}/>
        </div>
        <div className="row">
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.four}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.five}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.six}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.subtract}/>
        </div>
        <div className="row">
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.one}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.two}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.three}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.add}/>
        </div>
        <div className="row">
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.zero}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.decimal}/>
          <Button concatButtonValue={this.concatButtonValue} buttonText={buttons.equals} double={true}/>
        </div>
      </div>
    );
  }
}

export default Calculator;