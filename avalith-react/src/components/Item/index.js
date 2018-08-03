import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainItem from './main';

class Item extends Component {
    static propTypes = {
        cards: PropTypes.object.isRequired
    }
    render() {
        return (
            <MainItem cards={this.props.cards} />
        );
    }
}

export default Item;
