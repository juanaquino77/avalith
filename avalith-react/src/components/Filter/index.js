//Dependencies
import React, { Component } from 'react';
import FilterMain from './main';

class Filter extends Component {
    render() {
        return (
            <FilterMain filterHandler={this.props.filterHandler}/>
        );
    }
}

export default Filter;
