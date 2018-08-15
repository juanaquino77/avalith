import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContent from './main';
class Content extends Component {
    render() {
        // const {body, page} = this.props;
        return (
            <div>
                <MainContent sideBar={this.props.sideBar} cards={this.props.cards} />
             </div>
        );
    }
}

export default Content;