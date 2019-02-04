/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import ContactForm from '../contactForm/ContactForm';
import {addContact} from '../../redux/actions/contact'
import {connect} from 'react-redux';


class AddContact extends Component {

    handleContact = (contact) => {
        this.props.dispatch(addContact(contact));
        this.props.history.push('/')
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

const mapStateToProps = ({contacts}, props) => {
    const {index} = props.match.params;
    const contact = contacts[index];
    return {
        contact: contact
    }
};


export default connect(mapStateToProps)(AddContact);