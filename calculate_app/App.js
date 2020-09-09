import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberInput from './Number'

const buttonsSet_1 = [
    ['C', '( )', '%', 'DEL'],
    ['7', '8', '9', '/'], // ÷
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+']
];

const expression = {
    operator: ['÷', '*', '-', '+'],
    symbol: ['C', '( )', '%', 'DEL', '=', '.']
};

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            displayValue: '0',
            displayResult: ' ',
            parenthesesCheck: true,
        }
    }

    renderButtonSet_1() {
        let layouts = buttonsSet_1.map((buttonRows, index) => {
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

    renderButtonSet_2() {
        let layouts = buttonsSet_2.map((buttonRows, index) => {
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

    isExpressionOperator = (key) => {
        for (let i = 0; i < expression.operator.length; i++) {
            if (expression.operator[i] === key)
                return false;
        }
        return true;
    }

    isExpressionSymbol = (key) => {
        for (let i = 0; i < expression.mark.length; i++) {
            if (expression.markl[i] === key)
                return false;
        }
        return true;
    }

    resetState = () => {
        this.setState({
            displayValue: '0',
            displayResult: ' ',
            parenthesesCheck: true
        });
    }

    handleInput = (input) => {
        const { displayValue } = this.state;

        // CASE Show screen value input
        if (!(input === '=' || input === 'DEL' || input === 'C')) {

            // Input defult
            this.setState({ displayValue: displayValue != '0' ? displayValue + input : input});

            // Parentheses
            if (input === '( )' && this.state.parenthesesCheck) {
                this.setState({ displayValue:  displayValue != '0' ? displayValue + '(' : '('});
                this.setState({ parenthesesCheck: !this.state.parenthesesCheck });
            } else if (input === '( )' && !this.state.parenthesesCheck) {
                this.setState({ displayValue:  displayValue != '0' ? displayValue + ')' : ')'});
                this.setState({ parenthesesCheck: !this.state.parenthesesCheck });
            }

            // Symbol last string
            if (isNaN(displayValue.slice(-1)) && isNaN(input) && input != '( )') {
                let displayValue = this.state.displayValue;
                displayValue = displayValue.slice(0, displayValue.length - 1) + input;
                this.setState({ displayValue });
            }
        }

        // CASE Delete
        else if (input === 'DEL') {

            //      if delete '(' set -> parenthesesCheck: true
            // else if delete ')' set -> parenthesesCheck: false
            if (displayValue.slice(-1) === '(')
                this.setState({ parenthesesCheck: true });
            else if (displayValue.slice(-1) === ')')
                this.setState({ parenthesesCheck: false });

            // case lenght = 1 set value = 0
            if (this.state.displayValue.length == 1) {
                this.setState({
                    displayValue: '0',
                });

            // Defult
            } else {
                this.setState({
                    displayValue: displayValue.slice(0, displayValue.length - 1),
                });
            }
        }

        // Calculate
        else if (input === '=') {
            this.setState({
                displayResult: eval(this.state.displayValue)
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
                <View style={{ flex: 8, flexDirection: 'row' }}>
                    <View style={styles.inputContainer} >
                        {this.renderButtonSet_1()}
                    </View>
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
        flex: 6,
        backgroundColor: 'gray',
    },

    resultText: {
        color: 'black',
        fontSize: 60,
        paddingRight: 20,
        paddingTop: 40,
        textAlign: 'right'
    },

    valueText: {
        color: 'black',
        fontSize: 40,
        paddingRight: 20,
        textAlign: 'right'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row',
    },
});