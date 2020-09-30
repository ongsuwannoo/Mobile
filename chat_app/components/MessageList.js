import React from 'react';
import PropTypes from 'prop-types';
import { MessageShape } from '../utils/MessageUtils';
const keyExtractor = item => item.id.toString();
export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };
    static defaultProps = {
        onPressMessage: () => { },
    };
    // ...
}