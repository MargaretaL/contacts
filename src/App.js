import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts'
import AddContact from './components/addContact/AddContact'
import DeleteContact from './components/deleteContact/DeleteContact'
import EditContact from './components/editContact/EditContact'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/addcontact" component={AddContact}/>
                        <Route exact path="/" component={Contacts}/>
                        <Route exact path='/contact/:index' component={Contact}/>
                        <Route exact path='/deletecontact/:index' component={DeleteContact}/>
                        <Route exact path='/editcontact/:index' component={EditContact}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
