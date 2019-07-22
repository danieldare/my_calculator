import React, { Component } from 'react';
import "./Calculator.css";

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
        console.log("hi")
        const { currentNum, prevNum, input , operator} = this.state;
        const val = e.target.value ;
        if(currentNum !== "" && prevNum !== "" && operator !== "" && typeof input === "number") {
            this.clearInput();
        } 
        this.setState((prevState) => {
            return {
                input: prevState.input + val
            }
        });
    }

    clearLastInput = () => {
        this.setState((prevState) => {
            return {
                input: [...this.state.input].slice(0,this.state.input.length - 1).join("")
            }
        });
    }

    addDecimal = () => {

    }

   setOperatorInputs = (e) => {
        const op = e.target.value === "+" || "-" || "/" || "x" ?  e.target.value : "";
        if(op){
            this.setState((prevState) => { 
                return {
                    prevNum:  prevState.input,
                    operator: op,
                    input: ""
                }
            });
        }
    }

    clearInput = () => {
        this.setState({ input: '' , currentNum: "", prevNum: "", operator: "" });
    };

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
        }else if(this.state.operator === "-"){
            this.setState((prevState) => {
                return {
                    currentNum: prevState.input
                }
            })
            this.setState((prevState) => {
                return {
                    input:  +prevState.prevNum - +prevState.currentNum
                }
            });
        }else if(this.state.operator === "/"){
            this.setState((prevState) => {
                return {
                    currentNum: prevState.input
                }
            })
            this.setState((prevState) => {
                return {
                    input:  +prevState.prevNum / +prevState.currentNum
                }
            });
        }else if(this.state.operator === "x"){
            this.setState((prevState) => {
                return {
                    currentNum: prevState.input
                }
            })
            this.setState((prevState) => {
                return {
                    input:  +prevState.prevNum * +prevState.currentNum
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
                    {/* <div className="Calcalator-input">{this.state.input}</div> */}
                    <input className="Calcalator-input" defaultValue={this.state.input} />
                    <div className="btn-container">
                        <div className="btn-nums">
                            <button className="btn btn__0" value="sin" onClick={this.resetFields}>sin</button>
                            <button className="btn btn__0" value="cos" onClick={this.onButtonClick}>cos</button>
                            <button className="btn btn__0" value="tan" onClick={this.onButtonClick}>tan</button>

                            <button className="btn btn__0" value="C" onClick={this.clearInput}>C</button>
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
                            <button className="btn btn__0" value="<" onClick={this.clearLastInput}>{"<"}</button>
                        </div>
                        <div className="btn-syms">
                            <button className="btn btn__0" value="+" onClick={this.setOperatorInputs}>+</button>
                            <button className="btn btn__0" value="-" onClick={this.setOperatorInputs}>-</button>
                            <button className="btn btn__0" value="x" onClick={this.setOperatorInputs}>x</button>
                            <button className="btn btn__0" value="/" onClick={this.setOperatorInputs}>/</button>
                            <button className="btn btn__equal" value="=" onClick={this.calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
