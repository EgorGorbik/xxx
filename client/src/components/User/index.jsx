import React, {Component} from 'react';
import {connect} from "react-redux";
import Spinner from "../Spinner";
import './index.css'
import Chat from "./Chat";
import Header from "../Header";

class User extends Component {
    componentDidMount() {
        this.props.getChats();
    }

    render() {
        console.log(this.props.messages)
        if(this.props.loader) {
            return <Spinner />
        }

        return(
           <div className='main_user'>
               <Header />
                <div className='dialogs'>
                    {this.props.messages.data &&
                    this.props.messages.data.map(chat => <Chat chat={chat}/>)}
                </div>
                <div className='messages'>
                    <input/>
               </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loader: state.loader,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) =>  ({
    getChats: () => {dispatch({type: "GET_CHATS"})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
