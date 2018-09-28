import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './styled';
import Articles from './Articles';
import Post from '../Post';
import Title from './Title'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: "",
            card: {}
        }
    }
    componentWillMount = () => {
        this.setState({ cardId: 0})
    }
    postHandler = (e) => {
        let tecnologia = this.props.cards
            .filter((card) => {
                return card.cardId == e.target.id;
            });
        this.setState({
            cardId: e.target.id,
            card: tecnologia[0]
        });
    }
    render() {
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
                    <Post card={this.state.card} cardId={this.state.cardId} postHandler={this.postHandler} />
                </StyledMain>
            );
        }
    }
}

export default Dashboard;
