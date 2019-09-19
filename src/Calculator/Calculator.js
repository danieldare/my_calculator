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
        if(this.state.input !== ""){
            this.setState((prevState) => {
                return {
                    input: [...this.state.input].slice(0,this.state.input.length - 1).join("")
                }
            });
        }
    }

    addDecimal = (e) => {
        if(!this.state.input.includes(".")){
            this.setState((prevState) => {
                return {
                    input: prevState.input + "."
                }
            });
        }
    }

   setOperatorInputs = (e) => {
        const op = e.target.value === "+" || "-" || "/" || "x" ?  e.target.value : "";
        if(this.state.input !== "" && op){
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

    calPercentage = () => {
        if(this.state.input !== ""){
            this.setState((prevState) => { 
                return {
                    input: prevState.input / 100
                }
            });
        }
    }

    calTrig = (trigFunc) => {
        console.log(trigFunc === "sin")
        if(trigFunc === "sin"){
            this.setState((prevState) => { 
                return {
                    input: trigFunc +  prevState.input ,
                    result: Math.sin(prevState.input)
                }
            });
        }
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
        }else if(this.state.input.includes("sin")){
            this.setState((prevState) => {
                return {
                    currentNum: prevState.input
                }
            })
            this.setState((prevState) => {
                const inputNum = prevState.input.replace(/[^0-9]/g,'');
                return {
                    input: (Math.sin(inputNum * Math.PI / 180)).toFixed(4),
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
                    <div className="Calcalator-input">{this.state.input || this.state.operator || "0"}</div>
                    <div className="btn-container">
                        <div className="btn-nums">
                            <button className="btn btn__0" value="sin" onClick={(e) => this.calTrig(e.target.value)}>sin</button>
                            <button className="btn btn__0" value="cos" onClick={(e) => this.calTrig(e.target.value)}>cos</button>
                            <button className="btn btn__0" value="tan" onClick={(e) => this.calTrig(e.target.value)}>tan</button>

                            <button className="btn btn__0" value="CE" onClick={this.clearInput}>CE</button>
                            <button className="btn btn__0" value="%" onClick={this.calPercentage}>%</button>
                            <button className="btn btn__0" value="e" onClick={this.onButtonClick}>m%</button>
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
                            <button className="btn btn__0" value="." onClick={this.addDecimal}>.</button>
                            <button className="btn btn__0" value="<" onClick={this.clearLastInput}>{"<"}</button>
                        </div>
                        <div className="btn-syms">
                            <button className="btn btn__operators" value="+" onClick={this.setOperatorInputs}>+</button>
                            <button className="btn btn__operators" value="-" onClick={this.setOperatorInputs}>-</button>
                            <button className="btn btn__operators" value="x" onClick={this.setOperatorInputs}>x</button>
                            <button className="btn btn__operators" value="/" onClick={this.setOperatorInputs}>/</button>
                            <button className="btn btn__equal" value="=" onClick={this.calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
