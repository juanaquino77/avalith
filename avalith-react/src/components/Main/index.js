//Dependencies
import React, { Component } from 'react';
import MainPrincipal from './main';
import PropTypes from 'prop-types';

class Main extends Component {
    static PropTypes = {
        page: PropTypes.object.isRequired
    };
    render() {
        return (

            <MainPrincipal page={this.props.page} />
        );
    }
}

export default Main;
