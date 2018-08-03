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
                    <Col md="3">
                        <Aside onClick={this.onAlert} />             
                    </Col>
                    <Col md="9">
                        <StyledContent />
                    </Col>
                </Row>
        );
    }
}

export default MainContent;
