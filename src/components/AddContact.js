/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import ContactForm from './ContactForm';
import {addContact} from '../redux/actions/contact'
import {connect} from 'react-redux';


class AddContact extends Component {

    handleContact = (contact) => {
        this.props.dispatch(addContact(contact));
        this.props.history.push(`/`)
    };

    render() {
        return (
            <div>
                <h1>Add new contact</h1>
                <ContactForm onSaveContact={this.handleContact}/>
            </div>
        )
    }
}


export default connect()(AddContact);