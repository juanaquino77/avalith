//Dependencies
import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
// import styled from 'styled-components';
import { StyledPost, Image } from './styled';
// import Post from './styled';
class Post extends Component {
    render() {
        return (
            <StyledPost className="card" postHandler={this.props.postHandler} card={this.props.card}>
                {/* <div> */}
                    {/* <Post className="card" > */}
                        <div className="row">
                            <Button className="Btn-Back" color="dark" onClick={this.props.postHandler} >Go back</Button>
                            <Image className="img-thumbnail" src={this.props.card.cardPost.postImageUrl} alt="imagen" />
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="card-text">
                                    {this.props.card.cardPost.postDescription}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="card-title">{this.props.card.cardPost.postTitle}</h5>
                                <img className="img-thumbnail" src={this.props.card.cardPost.postImage2Url} />
                            </div>
                        </div>
                    {/* </Post> */}
                {/* </div> */}
            </StyledPost>
            
        );
    }
}

export default Post;