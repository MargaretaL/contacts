/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ul>
                        <li>
                            <NavLink to="/" className="header__link">CONTACTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addcontact" className="header__link">ADD CONTACT</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;