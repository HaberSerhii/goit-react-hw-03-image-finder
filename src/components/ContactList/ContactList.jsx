import { Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ContactListStyled>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ContactListStyled>
    );
  }
};