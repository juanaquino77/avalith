//Dependencies
import React, { Component } from 'react';
import MainPrincipal from './main';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: 0,
            card: {}
        }
    }
    render() {
        return (
            <MainPrincipal cards={this.props.cards} optionSelected={this.props.optionSelected} cardId={this.state.cardId} />
        );
    }
}

export default Main;
