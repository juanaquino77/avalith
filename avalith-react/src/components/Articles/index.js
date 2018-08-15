import React, { Component } from 'react';
import MainArticles from './main';
import PropTypes from 'prop-types';
class Articles extends Component {
    // static PropTypes = {
    //     // it: PropTypes.array.isRequired,
    //     // tech: PropTypes.string.isRequired
    // };

    render() {
        // alert(this.props.cards);
        
        return (
            <MainArticles cards={this.props.cards} postHandler={this.props.postHandler}/>
        );
    }
}

export default Articles;
