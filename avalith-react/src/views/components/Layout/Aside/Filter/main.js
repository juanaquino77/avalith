import React from 'react';
import { FilterSection, InputRadio } from './styled';

const Filter = (props) => {
    return (
        <FilterSection>
            <div className="custom-control custom-radio " id="Frontend">
                <input type="radio" className="custom-control-input" name="Frontend" id="Frontend" checked={props.check === "Frontend"} />
                <label className="custom-control-label" id="Frontend" onClick={props.filterHandler}> Frontend </label>
            </div>
            <div className="custom-control custom-radio " id="Backend">
                <input type="radio" className="custom-control-input" name="Backend" id="Backend" checked={props.check === "Backend"} />
                <label className="custom-control-label" id="Backend" onClick={props.filterHandler}> Backend </label>
            </div>
        </FilterSection >
    );
}

export default Filter;




