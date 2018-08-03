import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledMain from './styled';

class MainTitle extends Component {
    static PropTypes = {
        titulo: PropTypes.string.isRequired
    };
    render() {
        return (
            <StyledMain titulo={this.props.titulo}/>
        );
    }
}

export default MainTitle;