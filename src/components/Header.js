/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ul style={{}}>
                        <li style={{}}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addcontact">Add contact</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;