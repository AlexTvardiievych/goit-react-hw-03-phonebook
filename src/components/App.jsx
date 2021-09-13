import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import nextId from 'react-id-generator';
import Container from './Utils/Container/Container';
import Title from './Utils/Title/Title';

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (contacts) {
            this.setState({
                contacts: contacts,
            });
        }
    }

    componentDidUpdate(_, prevState) {
        const prevContacts = prevState.contacts;
        const nextContacts = this.state.contacts;

        if (nextContacts.length === 0) {
            localStorage.removeItem('contacts');
        }
        else {
            if (prevContacts !== nextContacts) {
                localStorage.setItem('contacts', JSON.stringify(nextContacts));
            }
        }
    }

    addContact = data => {
        const { name, number } = data;
        const { contacts } = this.state;
        const id = nextId();
        const newContact = {
            name,
            id,
            number,
        };

        const checkOnSameContact = contacts.find(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
        );

        const isEmptyFields = (name === '' || number === '');

        if (isEmptyFields) {
            alert('Please, fill empty fields');
            return;
        } else {
            if (checkOnSameContact) {
                alert(`${newContact.name} is already in contacts`);
            } else {
                this.setState(prev => ({
                    contacts: [...prev.contacts, newContact],
                }));
            }
        }
    };

    deleteContact = contactId => {
        this.setState(prev => ({
            contacts: prev.contacts.filter(contact => contactId !== contact.id),
        }));
    };

    handleFilterChange = e => {
        const target = e.target.value;
        this.setState({
            filter: target,
        });
    };

    filterByName = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = this.filterByName();

        return (
            <Container>
                <Title color="#424242" size={30} text="Phonebook" />
                <ContactForm onSubmit={this.addContact} contacts={contacts} />
                <Filter value={filter} onChange={this.handleFilterChange} />

                <Title marginT={10} size={20} text="Contacts" />

                <ContactList
                    onDeleteContact={this.deleteContact}
                    contacts={filteredContacts}
                />
            </Container>
        );
    }
}