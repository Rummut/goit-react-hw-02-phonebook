import { Component } from 'react';
import { ContactList } from './contact-list/ContactList';
import { ContactForm } from './contact-form/ContactForm';
import { Filters } from './filters/Flters';

export class App extends Component {
  state = {
     contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };

  handleContactsAdd = (newContact) => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact]}))
    
  }

  changeFilter = (newFilter) => {
    this.setState({
   filter: newFilter
 })
}

  render() {
    const {contacts, filter } = this.state
    
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm AddContact ={this.handleContactsAdd}></ContactForm>
        <h2>Contacts</h2>
        <Filters value = {filter} onChange = {this.changeFilter}></Filters>
        <ContactList contacts = {visibleContacts}></ContactList>
      </>
    );
  }
}
