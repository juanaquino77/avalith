import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/avalith.png';
var pubsub = require('pubsub-js');

class StyledLogo extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            // activeSidebar: 
        };
    }
    onHide = () => {
        if (this.state.opacity == 1) {
            this.setState({
                opacity: 0
            });
        } else {
            this.setState({
                opacity: 1
            });
        }
        pubsub.publish('hide', this.state.opacity);
    } 
    render() {
        const Logo = styled.div`
            padding:  1% 2%;
            `;
        return (
            <Logo>
                <img src={logo} alt="logo" width=" 3%" onClick={this.onHide} style={{ cursor: 'pointer' }} />
             </Logo>
        );
    }
}

export default StyledLogo;

