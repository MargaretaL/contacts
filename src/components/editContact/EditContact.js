/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import ContactForm from '../contactForm/ContactForm';
import {editContact} from '../../redux/actions/contact'
import {connect} from 'react-redux';


class EditContact extends Component {

    handleEditContact = (contact) => {
        this.props.dispatch(editContact(contact, +this.props.match.params.index));
        this.props.history.push(`/contact/${this.props.match.params.index}`)
    };

    render() {
        return (
            <div>
                <h1>Edit contact</h1>
                <h2>{this.props.contact.firstName} {this.props.contact.lastName}</h2>
                <ContactForm onSaveContact={this.handleEditContact} contact={this.props.contact}/>
            </div>
        )
    }
}

const mapStateToProps = ({contacts}, props) => {
    const {index} = props.match.params;
    const contact = contacts[index];
    return {
        contact: contact
    }
};

export default connect(mapStateToProps)(EditContact);