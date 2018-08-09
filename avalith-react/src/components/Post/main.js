//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import StyledPost from './styled';
import Post from './styled';
class PostMain extends Component {
    render() {
        let tecnologia = this.props.body
            .filter((contact) => {
                if (this.props.cardId == 0)
                    return contact
                else
                    return contact.cardId == this.props.cardId;
            });  
        return (
            <StyledPost body={tecnologia} />
        );
    }
}

export default PostMain;