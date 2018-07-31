import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './css/Content.css';
import Aside from './Aside';
import Main from './Main';
import Post from './Post';



class Content extends Component {
    render() {
        return (
            <div className="Content">
                    <Row>
                        <Col md="3"><Aside /></Col>
                        {/* <Col md="9"><Main /></Col> */}
                        <Col md="9"><Post /></Col>
                        
                    </Row>
            </div>
        );
    }
}

export default Content;
