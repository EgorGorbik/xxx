import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import './index.css';

class Spinner extends Component {
    render() {
        return(
            <div className='main_loader'>
                <Loader
                    type="Oval"
                    color="#560EAD"
                    height={100}
                    width={100}
                />
            </div>
        )
    }
}

export default Spinner;