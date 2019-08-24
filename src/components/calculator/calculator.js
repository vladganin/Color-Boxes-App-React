import React from 'react';
import './calculator.css';
import Button from 'react-bootstrap/Button';

const CalculatorButton = (props) => {
    let displayvalue = props.displayvalue;
    let buttonmod = props.styling;
    let styling = {
        'btn-lg': true,
        'buttonmod': buttonmod
    };

    return (
        <div>
            <Button type="button" variant="light" className={styling} onClick={props.onClick}>{displayvalue}
            </Button>
        </div >
    )
}

const GridSet = (props) => {
    return (
        <div className="grid-cl">
            {props.children}
        </div>
    )
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentvalue: []
        };

        this.handleClickValue = this.handleClickValue.bind(this);
        this.handleSum = this.handleSum.bind(this);
    };

    handleClickValue(num) {
        this.setState({ currentvalue: this.state.currentvalue.concat(num) })
    };

    handleSum() {
        let newvalue = this.state.currentvalue + 2;
        this.setState({ currentvalue: newvalue })
    }

    render() {
        return (
            <div class='wrapper'>
                <h1 className="title">Calculator</h1>
                <h2 className="valuetitle">{this.state.currentvalue ? this.state.currentvalue : 'value'}</h2>
                <GridSet>
                    <CalculatorButton onClick={() => this.handleClickValue(7)} displayvalue="7" />
                    <CalculatorButton onClick={() => this.handleClickValue(8)} displayvalue="8" />
                    <CalculatorButton onClick={() => this.handleClickValue(9)} displayvalue="9" />
                    <CalculatorButton styling="buttonmod" onClick={() => this.handleClickValue()} displayvalue=":" />
                </GridSet>
                <GridSet>
                    <CalculatorButton onClick={() => this.handleClickValue(4)} displayvalue="4" />
                    <CalculatorButton onClick={() => this.handleClickValue(5)} displayvalue="5" />
                    <CalculatorButton onClick={() => this.handleClickValue(6)} displayvalue="6" />
                    <CalculatorButton styling="buttonmod" onClick={() => this.handleClickValue()} displayvalue="x" />
                </GridSet>
                <GridSet>
                    <CalculatorButton onClick={() => this.handleClickValue(1)} displayvalue="1" />
                    <CalculatorButton onClick={() => this.handleClickValue(2)} displayvalue="2" />
                    <CalculatorButton onClick={() => this.handleClickValue(3)} displayvalue="3" />
                    <CalculatorButton styling="buttonmod" onClick={() => this.handleClickValue()} displayvalue="-" />
                </GridSet>
                <GridSet>
                    <CalculatorButton onClick={() => this.handleClickValue(0)} displayvalue="0" />
                    <CalculatorButton onClick={() => this.handleClickValue(1)} displayvalue="," />
                    <CalculatorButton onClick={() => this.handleClickValue(1)} displayvalue="=" />
                    <CalculatorButton styling="buttonmod" onClick={() => this.handleSum()} displayvalue="+" />
                </GridSet>
            </div>
        )
    }
}


export default Calculator;