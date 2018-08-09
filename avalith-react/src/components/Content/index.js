import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContent from './main';

class Content extends Component {
    static PropTypes = {
        page: PropTypes.object.isRequired
    };
    render() {
        const {body, page} = this.props;
        return (
            <div>
                <MainContent page={page} />
             </div>
        );
    }
}

export default Content;