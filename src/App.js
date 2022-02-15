import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  hasContact(name) {
    return this.state.contacts.find(el => el.name.toLowerCase().trim() === name.toLowerCase().trim());
  }

  addContactToState = (name, number) => {
    if (this.hasContact(name)) {
      alert(`${name} already in contacts`);
      return;
    };
    
    this.setState(prevState => ({
      contacts: prevState.contacts.concat({ name, number, id: nanoid() }),
    }))
  }
  
  onFormSubmit = formData => {
    const { name, number } = formData;
    this.addContactToState(name, number);
  }

  filterDataHandler = (filterData) => {
    this.setState({
      filter: filterData,
    })
  }
  
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

    return filtredContacts;
  }


  onDelete = (name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.name.toLowerCase().trim() !== name.toLowerCase().trim()),
    }));
  }

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className="App">
        <ContactForm onSubmitHandler={this.onFormSubmit}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter filterDataHandler={this.filterDataHandler}/>
        <ContactList contacts={filter ? this.filteredContacts() : contacts} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;

