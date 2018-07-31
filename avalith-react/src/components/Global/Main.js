import React, { Component } from 'react';

import './css/Main.css';
import Title from './Title';
import Articles from './Articles';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="row">
                    <Title />
                </div>
                <div className="row">
                    <Articles />
                </div>
            </div>
            
        );
    }
}

export default Main;
