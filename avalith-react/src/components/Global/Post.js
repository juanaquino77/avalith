import React, { Component } from 'react';
import { Button} from 'reactstrap';

import './css/Post.css';
import Title from './Title';
import Articles from './Articles';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="row">
                    <img className="Header-Img img-fluid" src={require('./images/js-logo.png')} />
                    <Button className="Btn-Back" color="dark">Go back</Button>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi aliquid voluptate quasi odit earum culpa ab, voluptatem
                            assumenda ex? Molestiae nemo laudantium magnam natus ullam, perspiciatis id optio fugiat. Lorem ipsum, dolor sit amet
                            In ratione quibusdam excepturi magnam sint consequatur, dolores facere molestias consequuntur itaque! Lorem, ipsum dolor
                        </p>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi aliquid voluptate quasi odit earum culpa ab, voluptatem
                            assumenda ex? Molestiae nemo laudantium magnam natus ullam, perspiciatis id optio fugiat. Lorem ipsum, dolor sit amet
                            In ratione quibusdam excepturi magnam sint consequatur, dolores facere molestias consequuntur itaque! Lorem, ipsum dolor
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Javascript Development</h5>
                        <img className="Statistics-Img  img-fluid" src={require('./images/statistics.png')} />

                    </div>
                </div>
             
            </div>

        );
    }
}

export default Post;