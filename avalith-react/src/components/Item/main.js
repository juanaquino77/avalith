import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledItem from './styled';

class MainItem extends Component {
    static propTypes = {
        cards: PropTypes.object.isRequired
    }
    render() {
        return (
            <StyledItem cards={this.props.cards} />
        );
    }
}

export default MainItem;