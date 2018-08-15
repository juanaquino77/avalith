import React, { Component } from 'react';
import StyledLogo from './styled';

class MainLogo extends Component {
    render() {
        return (
            <div>
                <StyledLogo esconderMenu={this.props.esconderMenu}/>
            </div>
        );
    }
}

export default MainLogo;