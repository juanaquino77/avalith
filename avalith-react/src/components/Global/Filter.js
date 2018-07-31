import React, { Component } from 'react';
import './css/Filter.css';

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <p>
                    Filter by
                </p>
                <div className="technologies">
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultChecked" name="defaultExampleRadios"  />
                        <label className="custom-control-label" htmlFor="defaultChecked">Frontend</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                        <label className="custom-control-label" htmlFor="defaultUnchecked">Backend</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
