import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/avalith.png';
var pubsub = require('pubsub-js');

class StyledLogo extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         // opacity: 0,
    //          activeSidebar: true
    //     };
    // }
    render() {
        const Logo = styled.div`
            padding:  1% 2%;
            `;
        return (
            <Logo>
                <img src={logo} alt="logo" width=" 3%" style={{ cursor: 'pointer' }} onClick={this.props.esconderMenu} />
             </Logo>
        );
    }
}

export default StyledLogo;


// onClick = {() => this.props.esconderMenu()