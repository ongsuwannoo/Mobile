import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberInput from './Number'

const buttonsSet_1 = [
    ['C', '()', '%', 'DEL'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+']
]
export default class App extends Component {

    constructor() {
        super()
        this.state = {
            displayValue: '0',
            displayResult: ' ',
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

    handleInput = (input) => {
        const { displayValue } = this.state;

        // show displayValue
        if (!(input === '=' || input === 'DEL' || input === 'C')) {
            this.setState({
                displayValue: displayValue != '0' ? displayValue + input : input,
            });

            // symbol last string
            // เครื่องหมายหลังสุด
            if (isNaN(displayValue.slice(-1)) && isNaN(input)) {
                this.setState({
                    displayValue: this.state.displayValue.replace(displayValue.slice(-1), input),
                });
            }
        }

        // input == 'DEL'
        else if (input === 'DEL') {
            // case lenght = 1 set value = 0
            if (this.state.displayValue.length == 1) {
                this.setState({
                    displayValue: '0',
                });
            }

            // Defult
            else {
                this.setState({
                    displayValue: this.state.displayValue.replace(displayValue.slice(-1), ''),
                });
            }
        }

        else if (input === '=') {
            this.setState({
                displayResult: eval(this.state.displayValue)
            });
        }

        else if (input === "C") {
            this.setState({
                displayValue: '0',
                displayResult: ' ',
            });
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
                    {/* <View style={styles.inputContainerSymbol} >
                        {this.renderButtonSet_2()}
                    </View> */}
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
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    inputContainer: {
        flex: 6,
        backgroundColor: 'black',
    },

    inputContainerSymbol: {
        flex: 2,
        backgroundColor: 'gray'
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
        borderTopWidth: 1,
        flexDirection: 'row',
        borderTopColor: 'white'
    },
});