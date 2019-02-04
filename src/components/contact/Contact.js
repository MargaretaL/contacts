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
            <div className="contact__name">
                <h1>{props.contact && props.contact.firstName} {props.contact && props.contact.lastName}</h1>

                <p>Email:</p><h4>{props.contact && props.contact.email}</h4>
                <p>Country:</p><h4>{props.contact && props.contact.country}</h4>
            </div>
            <button className="contact__button"
                    onClick={() => props.history.push(`/editcontact/${props.match.params.index}`)}>EDIT
            </button>
            <button className="contact__button"
                    onClick={() => props.history.push(`/deletecontact/${props.match.params.index}`)}>DELETE
            </button>
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