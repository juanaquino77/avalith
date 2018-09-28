import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Row, Col, Container } from 'reactstrap';
import { ArticleUl, ArticleLi} from './styled';
import Item from './Item';


const Article = (props) => {
    return (
        <ArticleUl>
            <Row>
                {
                props.cards.map((item, key) => {
                    return (
                        <ArticleLi key={key}>
                            <Item cards={item} postHandler={props.postHandler} />
                        </ArticleLi>
                    )
                })
                }
            </Row>
        </ArticleUl>
    );
}

export default Article;