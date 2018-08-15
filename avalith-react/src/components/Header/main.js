import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './styled';
import Logo from '../Logo';

class MainHeader extends Component {

    render() {
        return (
            <div>
                <StyledHeader>
                    <Logo esconderMenu={this.props.esconderMenu} />
                </StyledHeader  >
            </div>
        );
    }
}

export default MainHeader;