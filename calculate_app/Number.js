import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const expression = {
    operator: ['÷', '*', '-', '+', '%', '.'],
    symbol: ['C', 'DEL', '=']
};

const colorTextButton = {
    textValue: 'white',
    C: '#F57C00',
    Operator: 'rgb(2, 200, 237)',
    DEL: '#FFEB3B',
    EqualTo: 'rgb(77, 255, 77)'
}

class NumberInput extends Component {

    static isExpressionOperator = (key) => {
        for (let i = 0; i < expression.operator.length; i++) {
            if (expression.operator[i] === key)
                return true;
        }
        return false;
    }

    static isExpressionSymbol = (key) => {
        for (let i = 0; i < expression.symbol.length; i++) {
            if (expression.symbol[i] === key)
                return true;
        }
        return false;
    }

    render() {
        const { value, handleOnPrees } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => handleOnPrees(value)}>
                {
                    (() => {
                        if (value === 'C') {
                            return <Text style={[styles.textValue, styles.C]}>{value}</Text>
                        } else if (value === '( )' || NumberInput.isExpressionOperator(value)) {
                            return <Text style={[styles.textValue, styles.Operator]}>{value}</Text>
                        } else if (value === 'DEL') {
                            return <Text style={[styles.textValue, styles.DEL]}>{value}</Text>
                        } else if (value === '=') {
                            return <Text style={[styles.textValue, styles.EqualTo]}>{value}</Text>
                        } else {
                            return <Text style={styles.textValue}>{value}</Text>
                        }
                    })()
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(16, 27, 55)',
        margin: 1
    },

    textValue: {
        color: colorTextButton.textValue,
        fontSize: 50
    }, 

    C: {
        color: colorTextButton.C
    },

    Operator: {
        color: colorTextButton.Operator
    },

    DEL: {
        color: colorTextButton.DEL
    },

    EqualTo: {
        color: colorTextButton.EqualTo
    }
})
export default NumberInput;