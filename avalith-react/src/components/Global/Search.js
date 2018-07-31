import React, { Component } from 'react';
import './css/Search.css';

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <div className="form-group">
                    <input className="form-control transparent-input" type='text' placeholder="Search in cards" />
                </div>
            </div>
        );
    }
}

export default Search;
