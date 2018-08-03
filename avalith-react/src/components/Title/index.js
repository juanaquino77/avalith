//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainTitle from './main';

class Title extends Component {
    static PropTypes = {
        titulo: PropTypes.string.isRequired
    };
    render() {
        return (
            <MainTitle titulo={this.props.titulo}/>
        );
    }
}

export default Title;
