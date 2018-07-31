import React, { Component } from 'react';
import './css/Articles.css';
import Item from './Item';

class Articles extends Component {
    render() {
        return (
            <div className="Articles row">
                <div className="col-md-4">
                    <Item />
                </div>
                <div className="col-md-4">
                    <Item />
                </div> 
                <div className="col-md-4">
                    <Item />
                </div> 
                <div className="col-md-4">
                    <Item />
                </div> 
                <div className="col-md-4">
                    <Item />
                </div> 
                <div className="col-md-4">
                    <Item />
                </div>
            </div>
        );
    }
}

export default Articles;
