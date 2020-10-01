import React from 'react'
import PropTypes from 'prop-types';
import { MessageShape } from '../utils/MessageUtils';
import { FlatList, TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
const keyExtractor = item => item.id.toString();
export default class MessageList extends React.Component {

    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };
    renderMessageBody = ({ type, text, uri, coordinate }) => {
        switch (type) {
            case 'text':
                return (
                    <View style={styles.messagesBubble}>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                )
            case 'image':
                return (
                    <Image style={styles.imageMessage} source={{ uri }} />
                )
        }
    }

    renderMessageItem = ({ item }) => {
        const { onPressMessage } = this.props;
        return (
            <View key={item.id} style={styles.messageRow}>
                <TouchableOpacity onPress={() => onPressMessage(item)}>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { messages } = this.props.messages
        return (
            <FlatList
                style={styles.container}
                inverted
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={keyExtractor}
                keyboardShouldPersistTaps={'handled'}
            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        borderRadius: 5,
        flexDirection: 'row',
        flex: 1,
        color: "white",
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    message: {
        marginTop: 8,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    imageMessage: {
        width: "50%",
        resizeMode: "contain",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'flex-end',
    },
    textMessage: {
        borderRadius: 5,
        flexDirection: 'row',
        flex: 1,
        color: "white",
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    messagesBubble: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'rgb(16,135,255)',
        borderRadius: 20,
        width: '30%',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    mapMessage: {
        width: "80%",
        resizeMode: "contain",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'flex-end',
    }
});