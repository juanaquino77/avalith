import React, { Component } from 'react';
import logo from './images/avalith.png';
import './css/Header.css';

class Header extends Component {
    render() {
        return (
            // <div class="container">
                    <div className="Header">
                        <header className="Logo">
                            <img src={logo} alt="logo" />
                        </header>
                    </div>
            // </div>
        );
    }
}

export default Header;
