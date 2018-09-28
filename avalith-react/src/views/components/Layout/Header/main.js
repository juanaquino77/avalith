import React from 'react';
import { HeaderSection } from './styled';
import Logo from './Logo';

const Header = (props) => {
    return (
        <div>
            <HeaderSection>
                <Logo esconderMenu={props.esconderMenu} />
            </HeaderSection>
        </div>
    );
}

export default Header;
