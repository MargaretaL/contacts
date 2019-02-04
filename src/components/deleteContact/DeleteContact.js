/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import ContactForm from '../contactForm/ContactForm';
import {removeContact} from '../../redux/actions/contact'
import {connect} from 'react-redux';


class DeleteContact extends Component {

     handleDeleteContact = (contact) => {
         this.props.dispatch(removeContact(contact));
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Are you sure you want to delete this contact?</h1>
                <div>
                    <h3>{this.props.contact && this.props.contact.firstName} {this.props.contact && this.props.contact.lastName}</h3>
                </div>
                <button onClick={() => this.handleDeleteContact(this.props.contact)}>Delete</button>
                <button onClick={() => this.props.history.goBack()}>Back</button>

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

export default connect(mapStateToProps)(DeleteContact);