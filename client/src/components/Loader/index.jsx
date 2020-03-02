import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';
import './index.css';

class Loader extends Component {
    render() {
        return(
            <div className='main_loader'>
                <Spinner animation="border"/>
            </div>
        )
    }
}

export default Loader;