import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainAside from './main';
// var pubsub = require('pubsub-js');



class Aside extends Component {
    render() {

        return (
            <div >
                <MainAside cards={this.props.cards} filterHandler={this.props.filterHandler} updateSearch={this.props.updateSearch}  />
            </div>
        )
    }
}

export default Aside;