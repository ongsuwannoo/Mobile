import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NumberInput extends Component {
    render() {
        const { value, handleOnPrees } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => handleOnPrees(value)}>
                {
                    (() => {
                        if (value === 'C') {
                            return <Text style={[styles.textValue, { color: '#F57C00' }]}>{value}</Text>
                        } else if (value === '( )' || value === '%' || value === '/' || value === '*' || value === '-' || value === '+') {
                            return <Text style={[styles.textValue, { color: 'rgb(2, 200, 237)' }]}>{value}</Text>
                        } else if (value === 'DEL') {
                            return <Text style={[styles.textValue, { color: '#FFEB3B' }]}>{value}</Text>
                        } else if (value === '=') {
                            return <Text style={[styles.textValue, { color: 'rgb(77, 255, 77)' }]}>{value}</Text>
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
        color: 'white',
        fontSize: 50
    }
})
