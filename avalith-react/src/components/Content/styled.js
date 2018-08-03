import React, { Component } from 'react';
import styled from 'styled-components';
import Main from '../Main';
import Title from '../Title'
import Post from '../Post';

class StyledContent  extends Component {
    render() {
        const ContentWapper = styled.section`
             width: 100%; 
            `;
        return (
            <div>
                <ContentWapper >
                    <Title titulo="languajes and technologies" />
                    <Main />
                    {/* <Post /> */}
                </ContentWapper>
            </div>
        );
    }
}

export default StyledContent ;