import styled from 'styled-components';

export const Button = styled.button`
            position: absolute;
            cursor: pointer;
            z-index: 3;
            color: white;
            top: 2%;
            background: black;
            border: 1px solid black;
`;
export const Parallax = styled.div`
            width: 100%;
            height: 250px;
            background-image: url(${props => { return props.src }}); 
            background-attachment: fixed;
            background-size: contain;
`; 