// Dependencias
import React, { Component } from 'react';
import { Container } from 'reactstrap';



// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Header />
        <Content />
        <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
