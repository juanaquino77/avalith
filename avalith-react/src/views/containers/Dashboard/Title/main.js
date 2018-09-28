import React from 'react';
import { StyledTitle } from './styled';

const Title = (props) => {
    return (
        <StyledTitle>
            {props.titulo}
        </StyledTitle>
    );
}

export default Title;