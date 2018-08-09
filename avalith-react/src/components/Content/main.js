import React, { Component } from 'react';
import StyledContent from './styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Aside from '../Aside';
class MainContent extends Component {
    
    render() {
        return (
                <Row>
                    <Col lg="3" >
                        <Aside />   
                    </Col>
                    <Col lg="9" md="9">
                        <StyledContent page={this.props.page}/>
                    </Col>
                </Row>
        );
    }
}

export default MainContent;


// md = { this.props.sidebar ? 5 : 3 }