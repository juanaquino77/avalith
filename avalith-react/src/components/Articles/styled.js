import React, { Component } from 'react';
// import Link from 'react-router';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Item from '../Item';
import styled from 'styled-components';

class StyledArticles extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
        tech: PropTypes.string.isRequired
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
             let tecnologia = it
             .filter((contact) => {
                 if (this.props.tech === "")
                     return contact
                     else
                        return contact.cardTechnology[0] === tech || contact.cardTechnology[1] === tech;
                });        
        return (
            <Articles>
                <Row>
                    {tecnologia && tecnologia.map((item, key) => {
                        return (
                            <Col lg="4">
                                <List key={key}>
                                    <Item cards={item} />
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