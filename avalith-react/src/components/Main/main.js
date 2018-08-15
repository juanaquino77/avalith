import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './styled';
import Articles from '../Articles';
import Post from '../Post';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Articles from '../Articles';
// import styled from 'styled-components';
// import Post from '../Post';
import Title from '../Title'

// import Items from '../../data/card.json'
// var pubsub = require('pubsub-js');
class MainPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: "",
            card: {}
        }
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         cardId: 0
    //     }   
    // }
    componentWillMount = () => {
        this.setState({ cardId: this.props.cardId })
    }
    postHandler = (e) => {
        let tecnologia = this.props.cards
            .filter((card) => {
                return card.cardId == e.target.id;
            });
        this.setState({
            cardId: e.target.id,
            card: tecnologia
        });
    }
    render() {
        // return (
        //     <div>
        //         <StyledMain optionSelected={this.props.optionSelected} cards={this.props.cards} cardId={this.state.cardId} />
        //     </div>
        // );
        if (this.state.cardId == 0) {
            return (
                <StyledMain>
                    <Title titulo="languajes and technologies" />
                    <Articles cards={this.props.cards} postHandler={this.postHandler} />
                </StyledMain>
            );
        }
        else {
            return (
                <StyledMain>
                    <Post card={this.state.card[0]} cardId={this.state.cardId} postHandler={this.postHandler} />
                </StyledMain>
            );
        }
    }
}

export default MainPrincipal;
