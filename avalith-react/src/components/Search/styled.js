import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
var pubsub = require('pubsub-js');
class StyledSearch extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    };
    static PropTypes = {
        cards: PropTypes.array.isRequired
    };
    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }
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
        let filteredCards = this.props.cards.filter(
            (card) => {
                return card.cardTitle.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || card.cardDescription.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        pubsub.publish('listener2', filteredCards);
        return (
            <Search placeholder="Search in cards" value={this.state.search} onChange={this.updateSearch} />
        );
    }
}

export default StyledSearch;