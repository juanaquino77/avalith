import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledMain from './styled';
import Articles from '../Articles';
import Items from '../../data/Menu'
var pubsub = require('pubsub-js');

class MainPrincipal extends Component {
    constructor(props){
        super(props);
        this.state = {
            opcion: "Frontend"
        }
    }
    componentWillMount() {
        this.pubsub_event = pubsub.subscribe('listener', function (topic, items) {
            this.setState({opcion: items })
        }.bind(this));
    }
    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_event);
    }
    render() {
        return (
            <StyledMain opcionSeleccionada={this.state.opcion} />
        );
    }
}

export default MainPrincipal;
