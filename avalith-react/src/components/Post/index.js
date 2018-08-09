//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from '../../data/Menu'
import PostMain from './main';
var pubsub = require('pubsub-js');

class Post extends Component {
    static PropTypes = {
        body: PropTypes.array.isRequired,
        cardId: PropTypes.string.isRequired
    };
        render() {
        return (
            <PostMain 
                body={Items} cardId={this.props.cardId} 
            /> 
        );
    }
}

export default Post;
