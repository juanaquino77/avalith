import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Button, Parallax, Para } from './styled';

const HeaderPost = (props) => {
    return (
        <Parallax className="fluid" src={props.card.cardPost.postImageUrl} >
            <Button onClick={props.postHandler}>Go back</Button>
        </Parallax>
    );
}

export default HeaderPost;


