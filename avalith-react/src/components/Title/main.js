import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styled';

class Title extends Component {
    // static PropTypes = {
    //     titulo: PropTypes.string.isRequired
    // };titulo={this.props.titulo}
    render() {
        return (
            <StyledTitle >
                { this.props.titulo }
            </StyledTitle>
            
        );
    }
}

export default Title;