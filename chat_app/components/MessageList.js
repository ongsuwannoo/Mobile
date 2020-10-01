import React from 'react';
import PropTypes from 'prop-types';
import { MessageShape } from '../utils/MessageUtils';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
const keyExtractor = item => item.id.toString();
export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };
    static defaultProps = {
        onPressMessage: () => { }
    };
    renderMessageBody = ({type, text, uri, coordinate}) => {
        switch (type) {
            case 'text':
                return (
                    <View style={StyleSheet.messagesBubble}>
                        <Text style={StyleSheet.text}>{Text}</Text>
                    </View>
                )
        }
    }
    renderMessageItem = ({ item }) => {
        const { onPressMessage } = this.props;

        return (
            <View key={item.id} style={StyleSheet.messageRow}>
                <TouchableOpacity onPress={() => onPressMessage(item)}>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        )
    }
    render () {
        const { message } = this.props;
        return (
            <FlatList
            style={styles.container}
            inverted
            data={message}
            renderItem={this.renderMessageItem}
            keyExtractor={keyExtractor}
            keyboardShouldPersistTaps={'handled'}
            />
        )
    }
}
const styles = StyleSheet.create({

})