import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import DeleteContact from './components/DeleteContact'
import EditContact from './components/EditContact'
import Contact from './components/Contact'
import Header from './components/Header'

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
                        <Route exact path='/deletecontact/:firstName' component={DeleteContact}/>
                        <Route exact path='/editcontact/:index' component={EditContact}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
