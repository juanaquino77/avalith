// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Articles from '../Articles';
import styled from 'styled-components';
// import Post from '../Post';
// import Title from '../Title'

export const StyledMain = styled.div`
    width: 98%;
    `;
// class StyledMain extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cardId: "",
//             card: {}
//         }
//     }
//     componentWillMount= () => {
//         this.setState({ cardId: this.props.cardId })
//     }
//     postHandler = (e) =>{
//         let tecnologia = this.props.cards
//             .filter((card) => {
//                     return card.cardId == e.target.id;
//             }); 
//             this.setState({
//                 cardId: e.target.id,
//                 card: tecnologia
//             });
//     }
//     render() {
//         if (this.state.cardId == 0) {
//             return (
//                 <Main>
//                     <Title titulo="languajes and technologies" />
//                     <Articles cards={this.props.cards} postHandler={this.postHandler} />
//                 </Main>
//             );   
//         }
//         else{
//             return (
//                 <div>
//                     <Post card={this.state.card[0]} cardId={this.state.cardId} postHandler={this.postHandler} />
//                 </div>
//         );
//     }
// }
// }

// export default StyledMain;
