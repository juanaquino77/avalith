import React, { Component } from 'react';
import axios from 'axios';
import { Collapse, Row, Col, Container } from 'reactstrap';
import { CSSTransition, TransitionGroup, Transition} from 'react-transition-group';
import { PropTypes, string } from 'prop-types';
import { ContentSection } from './styled';
import Aside from '../../components/Layout/Aside';
import Dashboard from '../Dashboard';

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

class Content extends Component {
    constructor (props){
        super(props)
        this.state = {
            search: "",
            cardId: "",      
            check: "Frontend", 
            cardsFiltered: this.props.cards,
            col: 9
        }
    }
    filterHandler = (e) => {
        let cardTechnology = this.props.cards
            .filter((contact) => {
                return contact.cardTechnology[0] === e.target.id || contact.cardTechnology[1] === e.target.id;
            });  
        this.setState({
            check: e.target.id,
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
        let filteredCards = this.props.cards
            .filter(
                (card) => {
                    return card.cardTitle.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || card.cardDescription.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
        this.setState({
            cardsFiltered: filteredCards
        })
    }
    componentWillReceiveProps = () => {
        if (this.props.sideBar === false)
            this.setState({
                col:9
            })
        else{
            this.setState({
                col: 12
            })
        }
    }
    render() {
        return (
            <Row>
                <Col md="3">
                    <Transition in={this.props.sideBar} timeout={duration} unmountOnExit>
                        {   (state) => ( 
                                <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                                <Aside cards={this.props.cards} filterHandler={this.filterHandler} updateSearch={this.updateSearch} check={this.state.check} />   
                                </div>
                            )
                        }
                    </Transition>
                </Col>
                <Col md={this.state.col}>
                    <ContentSection>
                        <Dashboard cards={this.state.cardsFiltered}  cardId={this.state.cardId} />
                    </ContentSection>
                </Col>
            </Row>
        );
    }
}

export default Content;

