import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Item from '../Item';
import styled from 'styled-components';
// import Items from '../../data/Menu'

class StyledArticles extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
    };
    render() {
        const { it, tech } = this.props;
        const Articles = styled.ul`
            list-style-type: none;
            padding: 0;
            margin: 0;
            `; 
        const List = styled.li`
            padding: 0;
            margin: 0 0 5% 0;
            `;       
        return (
            <Articles>
                <Row>
                    {
                        this.props.cards.map((item, key) => {
                            return (
                                <Col lg="4">
                                    <List key={key}>
                                        <Item cards={item} postHandler={this.props.postHandler}/>
                                    </List>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Articles>
        );
    }
}

export default StyledArticles;