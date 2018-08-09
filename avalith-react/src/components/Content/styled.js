import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Main from '../Main';
import Title from '../Title'
import Post from '../Post';
import Items from '../../data/Menu'
var pubsub = require('pubsub-js');
class StyledContent  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            id: "0"
        }
    }
    static PropTypes = {
        page: PropTypes.object.isRequired
    };
    componentWillMount() {
        this.setState({ cards: Items });
        this.setState({ id: "4" });
    }
    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_event);
        pubsub.unsubscribe(this.pubsub_event2);
        pubsub.unsubscribe(this.pubsub_event3);
    }
    render() {
        const ContentWapper = styled.section`
             width: 100%; 
            `;
        return (
            <div>
                <ContentWapper > 
                    <Main page={this.props.page} />
                </ContentWapper>
            </div>
        );
    }
}

export default StyledContent ;