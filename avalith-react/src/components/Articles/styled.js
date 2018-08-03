import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';

import Item from '../Item';

// import Title from '../Title';
import styled from 'styled-components';

class StyledArticles extends Component {
    static PropTypes = {
        it: PropTypes.array.isRequired,
        tech: PropTypes.string.isRequired
    };

    render() {
        const Articles = styled.ul`
            list-style-type: none;
            `; 
        const List = styled.li`
            padding: 0;
            `; 
             const { it, tech } = this.props;
             let tecnologia = it
             .filter(function (contact) {
                 return contact.cardTechnology[0] === tech || contact.cardTechnology[1] === tech;
                });
                
        return (
            <Articles>
                <Row>
                    {tecnologia && tecnologia.map((item, key) => <List className="col-4" key={key}><Item cards={item} /> </List>)}
                </Row>
            </Articles>
            
        );
    }
}

export default StyledArticles;