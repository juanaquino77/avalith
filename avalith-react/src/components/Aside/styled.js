import React, { Component } from 'react';
import Personal from '../Personal';
import Search from '../Search';
import Filter from '../Filter';
import styled from 'styled-components';

        const AsideWapper = styled.div`
            height: 1300px;
            width: 100%;
            background-color: black;
            color: white;
            `;
class StyledAside extends Component {
    render() {
        return (
            <AsideWapper >
                <Personal />
                <Search cards={this.props.cards} updateSearch={this.props.updateSearch}  />
                <Filter filterHandler={this.props.filterHandler}/>
            </AsideWapper>
        );
    }
}

export default StyledAside;
