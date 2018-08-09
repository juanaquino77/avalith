import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
// const styles = {
//     transition: 'all 1s ease-out'
// };
class StyledHeader extends Component {

    render() {
        const HeaderWapper = styled.div`
            background-color: black;
            width: 100%;
            height: 50px;
            text-align:left;
            `;
        return (
            <div >
                <HeaderWapper >
                    <Logo >
                    </Logo>
                </HeaderWapper>
            </div>
        );
    }
}

export default StyledHeader;