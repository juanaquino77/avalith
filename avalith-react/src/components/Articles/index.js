//Dependencies
import React, { Component } from 'react';
import MainArticles from './main';
import PropTypes from 'prop-types';


class Articles extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
        tech: PropTypes.string.isRequired
    };

    render() {
        
        return (
            <MainArticles it={this.props.it} tech={this.props.tech} />
        );
    }
}

export default Articles;
