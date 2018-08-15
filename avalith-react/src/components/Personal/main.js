//Dependencies
import React, { Component } from 'react';
import { PersonalWapper } from './styled';

class Personal extends Component {
    render() {
        return (
            <PersonalWapper>
                <div className="name"> dev name</div>
                <div className="dni"> dni xx.xxx.xxx</div>
                <div className="años"> xx years old</div>
            </PersonalWapper>
            
        );
    }
}
            
export default Personal;
