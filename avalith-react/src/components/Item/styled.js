import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class StyledItem extends Component {
    static propTypes = {
        cards: PropTypes.object.isRequired
    }
    render() {
        const Item = styled.div`
            background-color: #e7e7e7;
            margin: 1%;
            `;
        return (
            <Item >
                <img className="img-fluid" src={this.props.cards.cardImageUrl} alt="imagen" />
                <p className="description">{this.props.cards.cardDescription}</p>
            </Item>
        );
    }
}

export default StyledItem;