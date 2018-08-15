import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { consolidateStreamedStyles } from 'styled-components';
import Post from '../Post';
import Items from '../../data/card.json'
var pubsub = require('pubsub-js');
class StyledItem extends Component {
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        pubsub.publish('listener3', e.target.id);
    }
    render() {
        const Item = styled.div`
            background-color: #e7e7e7;
            
            cursor: pointer;
            `;
        const Image = styled.img`
           height: 130px;
            width: 250px;
            `;
        return (
                <Item className="card" id={this.props.cards.cardId} onClick={this.props.postHandler}>
                    <Image className="img-thumbnail" id={this.props.cards.cardId} src={this.props.cards.cardImageUrl} alt="imagen" />
                    <h5 className="card-title">{this.props.cards.cardTitle}</h5>
                    <p className="card-text" id={this.props.cards.cardId}>{this.props.cards.cardDescription}</p>
                </Item>     
        );
    }
}

export default StyledItem;