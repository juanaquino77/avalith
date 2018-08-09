import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Articles from '../Articles';
import styled from 'styled-components';
import Post from '../Post';
import Title from '../Title'

var pubsub = require('pubsub-js');
class StyledMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: 0
        }
    }
    static PropTypes = {
        Items: PropTypes.array.isRequired,
        opcionSeleccionada: PropTypes.string.isRequired,
        cardId: PropTypes.string.isRequired
    };
    componentWillMount() {
        this.pubsub_event_3 = pubsub.subscribe('listener3', function (topic, id) {
            this.setState({ cardId: id })
        }.bind(this)); 
    }
    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_event3);
    }
    render() {
        const Main = styled.div`
            width: 98%;
            `;
        if (this.state.cardId == 0) {
            return (
            <Main>
                <Title titulo="languajes and technologies" />
                <Articles tech={this.props.opcionSeleccionada} it={this.props.Items} />
            </Main>
            );   
        }
        else{
            return (
                <div>
                    <Post body={this.props.Items} cardId={this.state.cardId} />
            </div>
        );
    }
}
}

export default StyledMain;
