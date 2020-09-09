import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NumberInput extends Component {
    render() {
        const {value, handleOnPrees} = this.props;
        return ( 
            <TouchableOpacity 
            style={styles.container}
            onPress={() => handleOnPrees(value)}>
                <Text style={styles.textValue}>{value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'white',
    },

    textValue: {color: 'white', fontSize: 50}
})

