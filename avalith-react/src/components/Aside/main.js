import React, { Component } from 'react';
import StyledAside from './styled';
import { Row, Col, Container } from 'reactstrap';

class MainAside extends Component {

    render() {
        return (
            <StyledAside cards={this.props.cards} filterHandler={this.props.filterHandler} updateSearch={this.props.updateSearch}  />
        );
    }
}

export default MainAside;
    
