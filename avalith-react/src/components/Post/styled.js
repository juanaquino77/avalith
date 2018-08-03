import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Items from '../../data/Menu'
import Articles from '../Articles';
import styled from 'styled-components';

class StyledPost extends Component {
    static PropTypes = {
        titulo: PropTypes.string.isRequired,
        opcionSeleccionada: PropTypes.string.isRequired
    };
    render() {
        const Post = styled.div`
            width: 100%;
            `;
        return (
            <div>
                <Post>
                    {/* <Articles tech={this.props.opcionSeleccionada} it={Items} /> */}
                    <div className="Post">
                        <div className="row">
                            <img className="Header-Img img-fluid" src={require('../../images/js-logo.png')} />
                            <Button className="Btn-Back" color="dark">Go back</Button>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi aliquid voluptate quasi odit earum culpa ab, voluptatem
                                    assumenda ex? Molestiae nemo laudantium magnam natus ullam, perspiciatis id optio fugiat. Lorem ipsum, dolor sit amet
                                    In ratione quibusdam excepturi magnam sint consequatur, dolores facere molestias consequuntur itaque! Lorem, ipsum dolor
                        </p>
                            </div>
                            <div className="col-md-4">
                                <h5>Javascript Development</h5>
                                <img className="Statistics-Img  img-fluid" src={require('../../images/statistics.png')} />
                            </div>
                        </div>
                    </div>
                </Post>
            </div>
        );
    }
}

export default StyledPost;
