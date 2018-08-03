import React, { Component } from 'react';
import styled from 'styled-components';

class StyledSearch extends Component {

    render() {
        const Search = styled.input`
            background-color:rgba(0,0,0,0) !important;
            color: white;
            border: 0; 
            border-bottom: 1px solid white; 
            width: 85%;
            margin: 10% 5%;
            ::-webkit-input-placeholder { color: white};
            `;
        return (
            <Search placeholder="Search in cards" type="text"   />
        );
    }
}

export default StyledSearch;