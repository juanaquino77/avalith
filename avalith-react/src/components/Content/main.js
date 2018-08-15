import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { StyledContent } from './styled';
import Aside from '../Aside';
import Main from '../Main';
import { get } from '../../services.js';

class MainContent extends Component {
    constructor (props){
        super(props)
        this.state = {
            as: "col-md-3",
            // con: "col-md-9",
            optionSelected: "",
            search: "",
            cardId: "",            
            cardsFiltered: this.props.cards
        }
    }

filterHandler = (e) => {
    let cardTechnology = this.props.cards
        .filter((contact) => {
            if (this.state.optionSelected == "")
                return contact
            else
                return contact.cardTechnology[0] === e.target.id || contact.cardTechnology[1] === e.target.id;
        });  
    this.setState({
        optionSelected: e.target.id,
        cardsFiltered: cardTechnology
    })
}
updateSearch = (event) => {
    this.setState({
        search: event.target.value.substr(0, 20)
    });
    this.searchHandler();
}
searchHandler = () => {
    let filteredCards = this.state.cardsFiltered
        .filter(
            (card) => {
                return card.cardTitle.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || card.cardDescription.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
    this.setState({
        cardsFiltered: filteredCards
    })
}
columnHandler = () => {
    if (this.props.sideBar == 0)
        return {
            display: "none"
        };
        else{
        return {
            transition: 'all 2s ease-out',
            // opacity: this.props.sideBar,
            col: "col-md-9"
        };
    }
}

render() {
    return (
            <Row>
            <div className={this.state.as} style={ this.columnHandler()}>
                <div >
                    <Aside cards={this.props.cards} filterHandler={this.filterHandler} updateSearch={this.updateSearch} />   
                    </div>
                </div>
            <div className={this.columnHandler().col} >
                    <StyledContent>
                    <Main cards={this.state.cardsFiltered} optionSelected={this.state.optionSelected} cardId={this.state.cardId}/>
                    </StyledContent>
                </div>
            </Row>
        );
    }
}

export default MainContent;

