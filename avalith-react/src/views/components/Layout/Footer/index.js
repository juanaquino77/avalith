//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './css/Footer.css';

class Footer extends Component {
    static PropTypes = {
        page: PropTypes.object.isRequired
    }
    render() {
        const { page} = this.props;
        return (
            <div className="Footer">
                {/* <p>{page}</p> */}
            </div>
        );
    }
}

export default Footer;
