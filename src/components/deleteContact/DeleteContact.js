/**
 * Created by lilit on 2019-01-30.
 */

import React, {Component} from 'react'
import {removeContact} from '../../redux/actions/contact'
import {connect} from 'react-redux';
import './DeleteContact.css'


class DeleteContact extends Component {

     handleDeleteContact = (contact) => {
         this.props.dispatch(removeContact(contact));
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h2>Are you sure you want to delete this contact?</h2>
                <div>
                    <h3>{this.props.contact && this.props.contact.firstName} {this.props.contact && this.props.contact.lastName}</h3>
                </div>
                <button className="deletecontact__button" onClick={() => this.handleDeleteContact(this.props.contact)}>Delete</button>
                <button className="deletecontact__button" onClick={() => this.props.history.goBack()}>Back</button>

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