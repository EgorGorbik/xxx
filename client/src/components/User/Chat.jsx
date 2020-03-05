import React, {Component} from 'react';

class Chat extends Component {
    render() {
        console.log(this.props.chat)
        return(
            <div className='dialog'>
                <div className='dialog_header'>{this.props.chat.interlocutor}</div>
                <div className='dialog_message'>{this.props.chat.text}</div>
            </div>
        )
    }
}

export default Chat;