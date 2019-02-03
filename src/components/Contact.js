/**
 * Created by lilit on 2019-01-31.
 */

import React from 'react'
import {connect} from 'react-redux'
import './Contact.css'

const Contact = (props) => {
    console.log(props.contact);
    return (
        <div className="contact">
            <h1>Contact!</h1>
            <div className="contact__name">
                <h3>{props.contact && props.contact.firstName} {props.contact && props.contact.lastName}</h3>
            </div>
            <button onClick={()=> props.history.push(`/editcontact/${props.match.params.index}`)}>EDIT</button>
            <button onClick={() => props.history.push(`/deletecontact/${props.contact.firstName}`)}>DELETE</button>
        </div>
    )
};

const mapStateToProps = ({contacts}, props) => {
    const {index} = props.match.params;
    const contact = contacts[index];
    return {
        contact: contact
    }
};

export default connect(mapStateToProps)(Contact);