/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import ContactForm from './ContactForm';
import {removeContact} from '../redux/actions/contact'
import {connect} from 'react-redux';


class DeleteContact extends Component {

    handleDeleteContact = (contact) => {
        this.props.dispatch(removeContact(contact));
    };

    render() {
        return (
            <div>
                <h1>Are you sure you want to delete this contact?</h1>
                <div>
                    <h3>{this.props.contact && this.props.contact.firstName} {this.props.contact && this.props.contact.lastName}</h3>
                </div>
                <button onClick={() => this.handleDeleteContact(this.props.contact)}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = ({contacts}, props) => {
    const {firstName} = props.match.params;
    const contact = contacts && contacts.find(c => c.firstName === firstName);
    return {
        contact: contact
    }
};

export default connect(mapStateToProps)(DeleteContact);