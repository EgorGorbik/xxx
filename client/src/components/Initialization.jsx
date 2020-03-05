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
        //socket.emit('join', this.props.user.data._id)

    }

    render() {
        return(<Router/>)
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loader: state.loader
});

const mapDispatchToProps = (dispatch) =>  ({
    getUser: () => {dispatch({type: "GET_USER"})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Initialization);