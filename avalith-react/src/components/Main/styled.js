import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from '../../data/Menu'
import Articles from '../Articles';
import styled from 'styled-components';

class StyledMain extends Component {
    constructor(props){
        super(props)
        this.state = "Frontend"
    }
    static PropTypes = {
        titulo: PropTypes.string.isRequired,
        opcionSeleccionada: PropTypes.string.isRequired
    };
    render() {
        const Main = styled.div`
            width: 100%;
            `;
        return (
            <div>
                <Main>
                    <Articles tech={this.props.opcionSeleccionada} it={Items} />
                </Main>
            </div>
        );
    }
}

export default StyledMain;

