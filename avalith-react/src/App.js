import React, { Component } from 'react';
import {Link, Route, Router} from 'react-router';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
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
    sideBar: 1,
    cards: Items
  })
}
  hideSideBar = () => {
    if (this.state.sideBar == 0)  
    {
      this.setState({
        sideBar: 1
      })
    }
      else{
        this.setState({
          sideBar: 0
        })
      }
  } 

  static PropTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    // console.log(Items);
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