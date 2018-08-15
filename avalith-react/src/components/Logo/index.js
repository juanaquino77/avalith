import React, { Component } from 'react';
import MainLogo from './main';

class Logo extends Component {
 
    render() {

        return (
            <MainLogo esconderMenu={this.props.esconderMenu} />
        );
    }
}

export default Logo;