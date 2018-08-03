import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Items from './data/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header items={Items} />
          <Content tech="Titulo" />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
