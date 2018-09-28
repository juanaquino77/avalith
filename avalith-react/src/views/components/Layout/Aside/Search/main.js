import React from 'react';
import { StyledSearch } from './styled';

const Search = (props) => {
        return (
            <StyledSearch onChange={props.updateSearch} placeholder="Search" />
        );
    }

export default Search;
