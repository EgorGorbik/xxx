import React, {Component} from 'react';

class Chat extends Component {
    render() {
        console.log(this.props.chat.countOnline)
        return(
            <div className='dialog'>
                <div className='dialog_header'>{this.props.chat.interlocutor}</div>
                <div className='dialog_message'>{this.props.chat.text}</div>
                {this.props.chat.countOnline == 2 &&
                <div className='online'>online</div>}
            </div>
        )
    }
}

export default Chat;