import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledPost, Image, Button, Parallax } from './styled';
import  HeaderPost  from './Header';

const Post = (props) => {
    return (
        <StyledPost className="card" postHandler={props.postHandler} card={props.card} >
            <HeaderPost postHandler={props.postHandler} card={props.card}/>
            <Row>
                <Col md="8">
                    <p className="card-text">
                        {props.card.cardPost.postDescription}
                    </p>
                </Col>
                <Col md="4">
                    <h5 className="card-title">{props.card.cardPost.postTitle}</h5>
                    <img className="img-thumbnail" src={props.card.cardPost.postImage2Url} />
                </Col>
            </Row>
        </StyledPost>
        
    );
}

export default Post;