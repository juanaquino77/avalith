import React, { Component } from 'react';
import { StyledFilter } from './styled';

class FilterMain extends Component {
    render() {
        return (
            <StyledFilter>
                <div className="custom-control custom-radio ">
                    <input type="radio" className="custom-control-input" name="Frontend" id="Frontend" checked />
                    <label className="custom-control-label" htmlFor="Frontend" onClick={this.props.filterHandler} id="Frontend" > Frontend </label>
                </div>
                <div className="custom-control custom-radio ">
                    <input type="radio" className="custom-control-input" name="Backend" id="Backend" />
                    <label className="custom-control-label" htmlFor="Backend" onClick={this.props.filterHandler} id="Backend">Backend</label>
                </div>
            </StyledFilter>
        );
    }
}

export default FilterMain;




