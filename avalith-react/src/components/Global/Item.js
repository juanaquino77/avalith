import React, { Component } from 'react';
import './css/Item.css';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                <img className="img-fluid" src={require('./images/js.png')} />
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi aliquid voluptate quasi odit earum culpa ab, voluptatem
                    assumenda ex? Molestiae nemo laudantium magnam natus ullam, perspiciatis id optio fugiat. Lorem ipsum, dolor sit amet
                    In ratione quibusdam excepturi magnam sint consequatur, dolores facere molestias consequuntur itaque! Lorem, ipsum dolor
                </p>
            </div>
        );
    }
}

export default Item;