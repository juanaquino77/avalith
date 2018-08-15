import React, { Component } from 'react';
import { StyledSearch } from './styled';

class Search extends Component {

    render() {

        return (
            <StyledSearch onChange={this.props.updateSearch} />
            
        );
    }
}

export default Search;
