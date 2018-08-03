import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContent from './main';

class Content extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
        tech: PropTypes.string.isRequired
    };

    render() {
    
        return (
            
            <MainContent />
        );
    }
}

export default Content;