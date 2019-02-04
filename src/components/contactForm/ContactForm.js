/**
 * Created by lilit on 2019-01-30.
 */
import React, {Component} from 'react';
import './ContactForm.css'
import {getNames} from 'country-list'

class ContactForm extends Component {

    constructor(props) {
        console.log(props);
        super(props);

        this.options = getNames();

        this.state = {
            firstName: (props.contact && props.contact.firstName) || '',
            lastName: (props.contact && props.contact.lastName) || '',
            email: (props.contact && props.contact.email) || '',
            country: (props.contact && props.contact.country) || '',
        }
    }


    handleFirstName = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({
            firstName
        }));
    };

    handleLastName = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({
            lastName
        }));
    };
    handleEmail = (e) => {
        const email = e.target.value;
        this.setState(() => ({
            email
        }));
    };

    handleCountry = (e) => {
        const country = e.target.value;
        this.setState(() => ({
            country
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveContact(this.state)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name:
                    <input value={this.state.firstName} type="text" name="name" onChange={this.handleFirstName}
                           required/>
                </label>
                <label>
                    Last Name:
                    <input value={this.state.lastName} type="text" name="name" onChange={this.handleLastName} required/>
                </label>
                <label>
                    Email:
                    <input value={this.state.email} type="text" name="name"
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleEmail} required/>
                </label>
                <label>Country:
                    <select value={this.state.country} onChange={this.handleCountry} required>
                        <option>
                        </option>
                        {this.options.map((country, index) => {
                            return (
                                <option value={country} key={index}>{country}</option>
                            )
                        })
                        }
                    </select>
                </label>
                <button className="contactForm__button" type="submit">Submit</button>
            </form>
        )
    }
}

export default ContactForm;
