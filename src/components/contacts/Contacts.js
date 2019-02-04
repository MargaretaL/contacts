/**
 * Created by lilit on 2019-01-30.
 */
import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';
import './Contacts.css'


const Contacts = (props) => {
    return (
        <div>
            <h1>Welcome</h1>

            <div className="contacts">
                <ul className="contacts__list">
                    {props.contacts.map((c, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={`/contact/${index}`} className="contacts__link">
                                    {c.firstName} {c.lastName} {c.email} {c.country}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                        <NavLink className="contacts__link contacts--link" to="/addcontact">Add contact</NavLink>
            </div>
        </div>
    )
};

const mapStateToProps = ({contacts}) => {
    return {
        contacts
    }
};

export default connect(mapStateToProps)(Contacts);