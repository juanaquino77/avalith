import React, { Component } from 'react';
import {Link, Route, Router} from 'react-router';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import Items from './data/Menu'
const styles = {
  transition: 'all 1s ease-out'
};
class App extends Component {


  static PropTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Container>
          <Header 
           />
          <Content tech="Titulo" page={children} />
        </Container>
      </div>
    );
  }
}

export default App;