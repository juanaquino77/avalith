//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledArticles from './styled';

//  import '.../css/Articles.css';
import Item from '../Item';

// import Items from '../../data/Menu'


class MainArticles extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
        tech: PropTypes.string.isRequired
    };

    render() {

        return (
            <StyledArticles it={this.props.it} tech={this.props.tech} />
        );
    }
}

export default MainArticles;
