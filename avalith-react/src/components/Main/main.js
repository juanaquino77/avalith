import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledMain from './styled';
import Articles from '../Articles';
import Post from '../Post';

import Items from '../../data/Menu'
var pubsub = require('pubsub-js');
class MainPrincipal extends Component {
    constructor(props){
        super(props);
        this.state = {
            opcion: "",
            cards: []
        }
    }
    static PropTypes = {
        page: PropTypes.object.isRequired
    };
    componentWillMount() {
        let self = this;
        this.pubsub_event = pubsub.subscribe('listener', function (topic, items) {
            this.setState({ opcion: items })
        }.bind(this)); 
        this.pubsub_event_2 = pubsub.subscribe('listener2', function (topic, i) {
            this.setState({ cards: i })
        }.bind(this)); 
        this.setState({ cards: Items });
    }
    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_event);
        pubsub.unsubscribe(this.pubsub_event2);
        pubsub.unsubscribe(this.pubsub_event3);
    }
    render() {
        return (
            <div>
                <StyledMain opcionSeleccionada={this.state.opcion} Items={this.state.cards} page={this.props.page}  />
            </div>
        );
    }
}

export default MainPrincipal;
