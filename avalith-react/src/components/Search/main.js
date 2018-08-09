import React, { Component } from 'react';
import StyledSearch from './styled';
import Items from '../../data/Menu'

class SearchMain extends Component {

    render() {

        return (
            <StyledSearch cards={Items}/>
        );
    }
}

export default SearchMain;
