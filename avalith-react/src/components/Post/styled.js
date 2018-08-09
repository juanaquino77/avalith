import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import PropTypes from 'prop-types';
// import Item from '../Item';
// import Articles from '../Articles';
import styled from 'styled-components';
class StyledPost extends Component {
    render() {  
        const Post = styled.div`
            width: 100%;
            position: relative;
            `; 
        const Image = styled.img`
            width: 98%;
            height: 200px;
            `; 
        const divBtn = styled.div`
        top: 100px;
            `;
        return (
            <div>
                <Post className="card">
                        <div className="row">
                            <divBtn >
                            <Button className="Btn-Back"  color="dark">Go back</Button>
                            </divBtn>
                            <Image className="img-thumbnail" src={this.props.body[0].cardPost.postImageUrl} alt="imagen" />
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="card-text">
                                    {this.props.body[0].cardPost.postDescription}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="card-title">{this.props.body[0].cardPost.postTitle}</h5>
                                <img className="img-thumbnail" src={this.props.body[0].cardPost.postImage2Url} />
                            </div>
                        </div>
                </Post>
            </div>
        );
    }
}

export default StyledPost;
