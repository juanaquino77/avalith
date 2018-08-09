import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainAside from './main';
var pubsub = require('pubsub-js');

const styles = {
    transition: 'all 2s ease-out'
};

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1
        };
    };
    componentWillMount() {
        this.pubsub_even = pubsub.subscribe('hide', function (topic, id) {
            this.setState({ opacity: id })
        }.bind(this)); 

    };
    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_even);
    }
    render() {
        return (
            <div style={{ ...styles, opacity: this.state.opacity }}>
                <MainAside />
            </div>
        );
    }
}

export default Aside;
