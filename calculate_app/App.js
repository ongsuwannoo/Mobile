import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberInput from './Render'

const buttonsSet = [
    ['C', '( )', '%', 'DEL'],
    ['7', '8', '9', '÷'], // ÷
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+']
];

const isExpressionOperator = NumberInput.isExpressionOperator;
const isExpressionSymbol = NumberInput.isExpressionSymbol;

export default class App extends Component {

    constructor() {
        super()

        /* Create state
        String displayValue: '0'        > show display value
        String displayResult: ' '       > show display result
        boolean decimalPoint: true      > there is only one decimal point
        boolean parenthesesCheck: true  > parentheses check for '(' and ')' 
        */
        this.state = {
            displayValue: '0',
            displayResult: ' ',
            decimalPoint: true,
            parenthesesCheck: true,
        }
    }

    renderButtonSet() {
        let layouts = buttonsSet.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItem, buttonIndex) => {
                return <NumberInput
                    key={'btn-' + buttonIndex}
                    value={buttonItem}
                    handleOnPrees={this.handleInput.bind(this, buttonItem)} />
            });
            return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
        })
        return layouts
    }

    resetState = () => {
        this.setState({
            displayValue: '0',
            displayResult: ' ',
            decimalPoint: true,
            parenthesesCheck: true
        });
    }

    handleInput = (input) => {
        const { displayValue } = this.state;

        /*
        CASE: Show display value input
        everything that can be displayed
        except '=', 'DEL', 'C' will not displayed.

        EX.
        True:  input = '1', '2', ..., '( )', '.'
        False: input = '=', 'DEL', 'C'
        */
        if (!isExpressionSymbol(input)) {

            /*
            CASE: Decimal point -> .
            EX.
                    12.123*123.5
            case 1:           ^  after operator
                    12.123123
            case 2:   ^          check decimal point
                    12.123123.
            case 3:          ^   show only one
            */

            if (isExpressionOperator(input) && input != '.') {
                this.setState({ decimalPoint: true });
            } else if (input === '.' && this.state.decimalPoint) {
                this.setState({ decimalPoint: false });
            } else if (input === '.' && !this.state.decimalPoint) {
                return;
            }

            /* 
            CASE: Parentheses -> ()
            EX.       input                          |   output
            case 1:    ()    state.parenthesesCheck  |    (
            case 2:    ()   !state.parenthesesCheck  |    )
            */
            if (input === '( )' && this.state.parenthesesCheck) {
                this.setState({ displayValue: displayValue != '0' ? displayValue + '(' : '(' });
                this.setState({ parenthesesCheck: !this.state.parenthesesCheck });
            } else if (input === '( )' && !this.state.parenthesesCheck) {
                this.setState({ displayValue: displayValue != '0' ? displayValue + ')' : ')' });
                this.setState({ parenthesesCheck: !this.state.parenthesesCheck });

                /*
                Show display default
                EX.      before     |    input     |     output
                case 1:    0        |      2       |       2
                case 2:    2        |      8       |      28
                */
            } else {
                this.setState({ displayValue: displayValue != '0' ? displayValue + input : input });
            }

            /*
            Symbol last string character
            EX.      before     |    input     |     output
            case 1:    2+       |      *       |      2*
            case 2:    2*       |      .       |      2*.
            */
            if (isExpressionOperator(displayValue.slice(-1))
                && isExpressionOperator(input)
                && !(this.state.displayValue.slice(-1) === ')')) {

                if (input === '.') return;

                let displayValue = this.state.displayValue;
                displayValue = displayValue.slice(0, displayValue.length - 1) + input;
                this.setState({ displayValue });
            }
        }

        /*
        CASE: Delete
        EX.      before     |    input     |     output
        case 1:    28       |     DEL      |      2
        case 2:     2       |     DEL      |      0
        */
        else if (input === 'DEL') {

            // if delete '.' set -> decimalPoint: true
            if (isExpressionOperator(displayValue.slice(-1)))
                this.setState({ decimalPoint: true });

            //      if delete '(' set -> parenthesesCheck: true
            // else if delete ')' set -> parenthesesCheck: false
            if (displayValue.slice(-1) === '(')
                this.setState({ parenthesesCheck: true });
            else if (displayValue.slice(-1) === ')')
                this.setState({ parenthesesCheck: false });

            // last string character
            if (this.state.displayValue.length == 1) {
                this.setState({
                    displayValue: '0',
                });

                // Default delete
            } else {
                this.setState({
                    displayValue: displayValue.slice(0, displayValue.length - 1),
                });
            }
        }

        // Calculate
        else if (input === '=') {
            this.setState({
                displayResult: eval(this.state.displayValue.replace('÷', '/'))
            });
        }

        // Clear  All
        else if (input === "C") {
            this.resetState();
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.resultContainer} >
                    <Text style={styles.valueText}>{this.state.displayValue}</Text>
                    <Text style={styles.resultText}>{this.state.displayResult}</Text>
                </View>
                <View style={styles.inputContainer} >
                    {this.renderButtonSet()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white'
    },

    resultContainer: {
        flex: 4,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: 'gray',
    },

    resultText: {
        color: 'blue',
        fontSize: 60,
        paddingRight: 20,
        paddingTop: 40,
        textAlign: 'right'
    },

    valueText: {
        color: 'black',
        fontSize: 60,
        paddingRight: 20,
        textAlign: 'right'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row',
    },
});