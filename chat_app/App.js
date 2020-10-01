import { StyleSheet, View, Alert } from 'react-native';
import React from 'react';
import Status from './components/Status';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage } from './utils/MessageUtils';

export default class App extends React.Component {

    state = {
        messages: [
            createTextMessage('Hello, world!1'),
            createTextMessage('Hello, world!2'),
            createImageMessage('https://s.isanook.com/tr/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjg0LzE0MjA4NzEvZ3JoLmpwZw==.jpg')
        ]
    };

    onPressMessage = (item) => {
        Alert.alert(
            "Delete message?",
            "Are you sure you want to permanently delete this message?",
            [
                {
                    text: "CANCEL",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "DELETE", onPress: () => {
                        this.setState({
                            messages: this.state.messages.filter(obj => obj.id != item.id)
                        })
                        console.log('\x1b[41mDELETE\x1b[0m')
                    }
                }
            ],
            { cancelable: false }
        );
    }

    renderMessageList() {
        return (
            <View style={styles.content}>
                <MessageList messages={this.state} onPressMessage={this.onPressMessage} />
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