import React, { Component } from 'react';
import Personal from '../Personal';
import Search from '../Search';
import Filter from '../Filter';
import styled from 'styled-components';

class StyledAside extends Component {
    render() {
        const AsideWapper = styled.div`
            height: 600px;
            width: 100%;
            background-color: black;
            color: white;
            `;
        return (
            <AsideWapper>
                <Personal />
                <Search />
                <Filter />
            </AsideWapper>
        );
    }
}

export default StyledAside;
