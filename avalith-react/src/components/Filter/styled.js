import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainPrincipal from '../Main';
var pubsub = require('pubsub-js');

class StyledFilter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        pubsub.publish('listener', e.target.id);
    }
    render() {
        const Filter = styled.section`
            margin: 10% 5%;
            `;
        return (
            <div>
                <Filter>
                    <div className="custom-control custom-radio opciones form-check">
                        <input type="radio" className="custom-control-input" name="exampleRadios1" id="exampleRadios1" value="option1" checked/>
                        <label className="custom-control-label" htmlFor="exampleRadios1" onClick={this.handleClick} id="Frontend"> Frontend </label>
                    </div>
                    <div className="custom-control custom-radio opciones">
                        <input type="radio" className="custom-control-input" name="exampleRadios2" id="exampleRadios2" value="option2" />
                        <label className="custom-control-label" htmlFor="exampleRadios2" onClick={this.handleClick} id="Backend">Backend</label>
                    </div> 
                </Filter>
            </div>
        );
    }
}

export default StyledFilter;




















                     
     