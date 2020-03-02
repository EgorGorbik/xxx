import React, {Component} from 'react';
import './index.css';

class Error extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.touched) {
            return <div className='form-message invalid'>&nbsp;</div>;
        }

        if(this.props.message) {
            return <div className='form-message invalid'>{this.props.message}</div>;
        }

        return <div className='form-message invalid'>&nbsp;</div>;
    }
}

export default Error;