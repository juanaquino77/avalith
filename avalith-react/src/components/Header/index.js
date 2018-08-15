import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeader from './main';

class Header extends Component {
    render() {
        return (
            <div>
                <MainHeader esconderMenu={this.props.esconderMenu}/>
            </div>
        );
    }
}

export default Header;
