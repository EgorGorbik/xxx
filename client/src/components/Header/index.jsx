import React, {Component} from 'react';
import './index.css';
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return(
            <div className='header'>
                {this.props.user.data.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loader: state.loader
});

const mapDispatchToProps = (dispatch) =>  ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);