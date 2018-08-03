import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/avalith.png';

class StyledLogo extends Component {
    render() {
        const Logo = styled.div`
            /* width: 3%; */
            padding:  1% 2%;
            
            `;
        return (
            <Logo>
                <img src={logo} alt="logo" width=" 3%" />
             </Logo>
            
        );
    }
}

export default StyledLogo;

