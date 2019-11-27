import { EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

export class ContactService {
contactSelected = new EventEmitter<Contact>();
// contactsChanged = new EventEmitter<Contact[]>();
filterContact = '';
   public  contacts: Contact[] = [];

   public favoriteContacts: Contact[] = [];

   getContacts() {
      return this.contacts.slice();
   }

   getContact(index: number) {
      return this.contacts[index];
   }

   getFavorite() {
      return this.favoriteContacts;
   }

   addContact(contact: Contact) {
      this.contacts.push(contact);
      // this.contactsChanged.emit(this.contacts.slice());
   }

   addFavoriteContact(contact: Contact) {
      this.favoriteContacts.push(contact);
   }

   updateContact(index: number, newContact: Contact) {
      this.contacts[index] = newContact;
      this.favoriteContacts[index] = newContact;
   }

   deleteContact(index: number) {
      const arrayCopy = [...this.contacts];
      arrayCopy.splice(index, 1);
      this.contacts = arrayCopy;
   }

   deleteFavoriteContact(index: number) {
      const arrayCopy = [...this.favoriteContacts];
      arrayCopy.splice(index, 1);
      this.favoriteContacts = arrayCopy;
      console.log(this.deleteContact(index));
      return this.favoriteContacts;
   }

   isPhoneTaken(id, newPhoneNumber) {
   if (this.contacts[id]) {
      if (this.contacts[id].phoneNumber === newPhoneNumber) {
         return true;
      }
   }
   return false;
   }

   onFilter(search: string) {
      this.filterContact = search;
      console.log(this.filterContact);
   }

}

