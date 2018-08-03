//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MainAside from './main';

var pubsub = require('pubsub-js');

class Box extends Component {
    componentWillMount(){
        this.pubsub_event = pubsub.subscribe('listener', function(topic, items){
            console.log(topic, items);
        });
    }
    componentWillUnmount(){
        pubsub.unsubscribe(this.pubsub_event);
    }
onEventREcibe(){
    console.log("evento recib")
}
    render() {
        return (
            <div>

                hola
            </div>
        );
    }
}

export default Box;
