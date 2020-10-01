import { StyleSheet, View } from 'react-native';
import React from 'react';
import Status from './components/Status';
import MessageList from './components/MessageList';
import { createTextMessage } from './utils/MessageUtils';

export default class App extends React.Component {
    state = {
        message : [
            createTextMessage('Hello, world')
    ]};
    renderMessageList() {
        return (
            <View style={styles.content}>
                <MessageList message={this.state} />
            </View>
        );
    }
    renderInputMethodEditor() {
        return (
            <View style={styles.inputMethodEditor}></View>
        );
    }
    renderToolbar() {
        return (
            <View style={styles.toolbar}></View>
        );
    }
    render() {
        console.log("\x1b[33mRestarted\x1b[0m");
        console.log(this.renderMessageList())

        return (<View style={styles.container}>
            <Status />
            {this.renderMessageList()}
            {this.renderToolbar()}
            {this.renderInputMethodEditor()}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputMethodEditor: {
        flex: 1,
        backgroundColor: 'white',
    },
    toolbar: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.04)',
        backgroundColor: 'white',
    },
})