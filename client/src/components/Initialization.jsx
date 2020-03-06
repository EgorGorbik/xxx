import React, {Component} from 'react';
import Router from "./Router";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import socket from '../config/socket';

class Initialization extends Component {
    componentWillMount() {
        if(localStorage.getItem('access_token')) {
            this.props.getUser();
        }

        this.props.user.data

    }

    componentDidMount() {
/*        socket.on('addUser', (id) => {
            this.props.setUserOnline(id)
            console.log(id)
            console.log(this.props.messages)
        })*/
    }

    render() {
        return(<Router/>)
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loader: state.loader,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) =>  ({
    getUser: () => {dispatch({type: "GET_USER"})},
    setUserOnline: (id) => {dispatch({type: "SET_USER_ONLINE", id})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Initialization);