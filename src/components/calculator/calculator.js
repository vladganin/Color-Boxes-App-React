import React from 'react';
import './calculator.css';
import Button from 'react-bootstrap/Button';
import * as math from 'mathjs';



/* Button SECONDARY component
---------------------------------------------------------
*/

const CalculatorButton = (props) => {
    let buttonmod = props.styling;
    let styling = {
        'btn-lg': true,
        'buttonmod': buttonmod
    };

    return (
        <div>
            <Button type="button" variant="light" className={styling} onClick={() => props.onClick(props.children)}>{props.children}
            </Button>
        </div >
    )
}

/* Grid SECONDARY component
--------------------------------------------------------
*/

const GridSet = (props) => {
    return (
        <div className="grid-cl">
            {props.children}
        </div>
    )
}


/* Calculator MAIN component
---------------------------------------------------------
*/

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentvalue: '',
        };
    };

    handleClickValue = value => {
        this.setState({ currentvalue: this.state.currentvalue + value })
    };

    doCalculate = () => {
        this.setState({ currentvalue: math.evaluate(this.state.currentvalue) });
    }

    doMultiply = value => {
        if (value === 'x') {
            this.setState({ currentvalue: this.state.currentvalue + value.replace("x", "*") });
        }
    };

    doDivide = value => {
        if (value === ':') {
            this.setState({ currentvalue: this.state.currentvalue + value.replace(":", "/") });
        }
    };

    render() {
        return (
            <div class="app-wrapper">
                <div class='wrapper'>
                    <h1 className="title">Calculator</h1>
                    <h2 className="valuetitle">{this.state.currentvalue}</h2>
                    <GridSet>
                        <CalculatorButton onClick={this.handleClickValue}>7</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>8</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>9</CalculatorButton>
                        <CalculatorButton styling="buttonmod" onClick={this.doDivide}>:</CalculatorButton>
                    </GridSet>
                    <GridSet>
                        <CalculatorButton onClick={this.handleClickValue}>4</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>5</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>6</CalculatorButton>
                        <CalculatorButton styling="buttonmod" onClick={this.doMultiply}>x</CalculatorButton>
                    </GridSet>
                    <GridSet>
                        <CalculatorButton onClick={this.handleClickValue}>1</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>2</CalculatorButton>
                        <CalculatorButton onClick={this.handleClickValue}>3</CalculatorButton>
                        <CalculatorButton styling="buttonmod" onClick={this.handleClickValue}>-</CalculatorButton>
                    </GridSet>
                    <GridSet>
                        <CalculatorButton onClick={this.handleClickValue}>0</CalculatorButton>
                        <CalculatorButton onClick={() => this.setState({ currentvalue: "" })}>C</CalculatorButton>
                        <CalculatorButton onClick={() => this.doCalculate()}>=</CalculatorButton>
                        <CalculatorButton styling="buttonmod" onClick={this.handleClickValue}>+</CalculatorButton>
                    </GridSet>
                </div>
            </div>
        )
    }
}


export default Calculator;