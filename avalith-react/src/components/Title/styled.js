import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

class StyledTitle extends Component {
    static PropTypes = {
        titulo: PropTypes.string.isRequired
    };
    render() {
        const Titulo = styled.h4`
            width: 100%;
            `;
        return (
            <Titulo>
                {this.props.titulo}
            </Titulo>
        );
    }
}

export default StyledTitle;

{/* <div className="row">
                    <Title contenido={this.props.titulo} />
                </div>
                <div className="row">
                    <Articles tech={this.props.opcionSeleccionada} it={Items} />
                </div> */}