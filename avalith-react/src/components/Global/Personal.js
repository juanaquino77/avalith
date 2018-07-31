import React, { Component } from 'react';
import './css/Personal.css';

class Personal extends Component {
    render() {
        return (
            <div className="Personal">
                <div className="name"> dev name</div>
                <div className="dni"> dni xx.xxx.xxx</div>
                <div className="años"> xx years old</div>
            </div>
        );
    }
}

export default Personal;
