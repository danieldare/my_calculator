import React, { Component } from 'react';
import "./Calculator.css";
import { logic }from "./Operate";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            prevNum: "",
            currentNum: "",
            operator: null,
            result: 0
        }
    }

    getBtnValue = (e) => {
        this.setState({ total: (e.target.value + this.state.total ), btn: e.target.value })
    }

    onButtonClick = (e) => {
        this.setState({ input: this.state.input + e.target.value });
    }

    addInputs = () => {
        this.setState((prevState) => { 
            return {
                prevNum:  prevState.input
            }
        }, () => {
            this.setState((prevState) => {
                return  {
                    input: ""
                }
            })
        });
        this.setState({operator: "+"});
    }

    calculate = () => {        
        if (this.state.operator === "+") {
            this.setState((prevState) => {
                return {
                    currentNum: prevState.input
                }
            })
            this.setState((prevState) => {
                return {
                    input:  +prevState.prevNum + +prevState.currentNum
                }
            });
        }
    }

   
    render() {
        console.log(this.state);
        return (
            <div className="Calculator">
                <div className="Calculator_container" >
                    <p className="title">MyCalculator</p>
                    <div className="Calcalator-input">{this.state.input}</div>
                    <div className="btn-container">
                        <div className="btn-nums">
                            <button className="btn btn__0" value="C" onClick={this.resetFields}>sin</button>
                            <button className="btn btn__0" value="%" onClick={this.onButtonClick}>cos</button>
                            <button className="btn btn__0" value="e" onClick={this.onButtonClick}>tan</button>

                            <button className="btn btn__0" value="C" onClick={this.resetFields}>C</button>
                            <button className="btn btn__0" value="%" onClick={this.onButtonClick}>%</button>
                            <button className="btn btn__0" value="e" onClick={this.onButtonClick}>e</button>
                            <button className="btn btn__0" value="7" onClick={this.onButtonClick}>7</button>
                            <button className="btn btn__0" value="8" onClick={this.onButtonClick}>8</button>
                            <button className="btn btn__0" value="9" onClick={this.onButtonClick}>9</button>
                            <button className="btn btn__0" value="4" onClick={this.onButtonClick}>4</button>
                            <button className="btn btn__0" value="5" onClick={this.onButtonClick}>5</button>
                            <button className="btn btn__0" value="6" onClick={this.onButtonClick}>6</button>
                            <button className="btn btn__0" value="1" onClick={this.onButtonClick}>1</button>
                            <button className="btn btn__0" value="2" onClick={this.onButtonClick}>2</button>
                            <button className="btn btn__0" value="3" onClick={this.onButtonClick}>3</button>
                            <button className="btn btn__0" value="0" onClick={this.onButtonClick}>0</button>
                            <button className="btn btn__0" value="." onClick={this.onButtonClick}>.</button>
                            <button className="btn btn__0" value="" onClick={this.onButtonClick}>{"<"}</button>
                        </div>
                        <div className="btn-syms">
                            <button className="btn btn__0" value="+" onClick={this.addInputs}>+</button>
                            <button className="btn btn__0" value="-" onClick={this.onButtonClick}>-</button>
                            <button className="btn btn__0" value="*" onClick={this.onButtonClick}>x</button>
                            <button className="btn btn__0" value="/" onClick={this.onButtonClick}>/</button>
                            <button className="btn btn__equal" value="=" onClick={this.calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
