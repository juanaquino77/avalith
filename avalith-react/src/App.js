import React, { Component } from 'react';
import {Link, Route, Router} from 'react-router';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './views/components/Layout/Header';
import Content from './views/containers/Content';
import Footer from './views/components/Layout/Footer';
// import Get from '../../services.js';

import Items from './data/card.json'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: "",
      cards: []
    }
  }
componentWillMount = () =>{
  this.setState({
    sideBar: true,
    cards: Items
  })
}
  hideSideBar = () => {
      this.setState({
        sideBar: !this.state.sideBar
      })
  } 
  static PropTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Container>
          <Header  esconderMenu={this.hideSideBar} />
          <Content sideBar={this.state.sideBar} cards={this.state.cards} />
        </Container>
      </div>
    );
  }
}

export default App;