import React from 'react';
import { LogoSection } from './styled';
import logo from '../../../../../images/avalith.png';

const Logo = (props) => {
    return (
        <LogoSection>
            <img src={logo} alt="logo" width="3%" style={{ cursor: 'pointer' }} onClick={props.esconderMenu} />
        </LogoSection>
    );
}

export default Logo;