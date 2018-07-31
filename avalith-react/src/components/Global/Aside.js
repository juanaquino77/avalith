import React, { Component } from 'react';
import './css/Aside.css';
import Personal from './Personal';
import Search from './Search';
import Filter from './Filter';


class Aside extends Component {
    render() {
        return (
            <div className="Aside">
                    <Personal />
                    {/* <Search />
                    <Filter /> */}
            </div>
        );
    }
}

export default Aside;
