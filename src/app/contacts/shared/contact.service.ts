import { Subject } from 'rxjs';
import { Contact } from './contact.model';
// import { EventEmitter } from '@angular/core';

export class ContactService {
// contactSelected = new EventEmitter<Contact>();
contactsChanged = new Subject<Contact[]>();

filterContact = '';
   private  contacts: Contact[] = [];

  // public favoriteContacts: Contact[] = [];

   getContacts() {
      return this.contacts.slice();
   }

   getContact(index: number) {
      return this.contacts[index];
   }

   getFavorites() {
      return this.contacts.filter(
         cont => cont.fav === true
      );
   }

   getFavorite(index) {
      return this.getFavorites()[index];
   }

   addContact(contact: Contact) {
      const newContact = new Contact(contact.name, contact.lastName, contact.email, contact.phoneNumber, contact.imagePath, false);
      this.contacts.push(newContact);
      this.contactsChanged.next(this.contacts.slice());
      // console.log(newContact, this.contacts);
      // this.contactsChanged.emit(this.contacts.slice());
   }

   reverseFavoriteContact(index) {
      // const index: number = this.contacts.findIndex(
      //    cont => cont.phoneNumber === phoneNumber
      // );

      // tslint:disable-next-line: no-unused-expression
      this.contacts[index].fav = !this.contacts[index].fav;
   }

   updateContact(index, contact: Contact) {
      const newContact = new Contact(contact.name, contact.lastName, contact.email, contact.phoneNumber, contact.imagePath, false);
      this.contacts[index] = newContact;
      this.contactsChanged.next(this.contacts.slice());
   }

   // to get the index of Contact in the favorites
   getFavoriteIndex(contactsIndex) {
     const favorites = this.getFavorites();
     const phoneNumber = this.contacts[contactsIndex].phoneNumber;
     const favoriteIndex = favorites.findIndex(
         cont => cont.phoneNumber === phoneNumber
       );
     return favoriteIndex ;
   }

   // to get the index of favoriteContact in contacts
   getContactIndex(favoriteIndex) {
      const phoneNumber = this.getFavorites()[favoriteIndex].phoneNumber;
      return this.contacts.findIndex(
         cont => cont.phoneNumber === phoneNumber
      );
   }

   updateFavorite(favoriteIndex, contact: Contact) {
   //   const favoriteIndex = this.getFavoriteIndex(index);
     const contactIndex =  this.getContactIndex(favoriteIndex);
   //   console.log(favoriteIndex);
     const newContact = new Contact(contact.name, contact.lastName, contact.email, contact.phoneNumber, contact.imagePath, true);
   //   console.log('newContact : ' + stringify(newContact));
     this.contacts[contactIndex] = newContact;
     this.contactsChanged.next(this.contacts.slice());
   }

   deleteContact(phoneNumber) {
      const index: number = this.contacts.findIndex(
         cont => cont.phoneNumber === phoneNumber
      );
      const arrayCopy = [...this.contacts];
      arrayCopy.splice(index, 1);
      this.contacts = arrayCopy;
      this.contactsChanged.next(this.contacts.slice());
   }

   // deleteFavoriteContact(index: number) {
   //    const arrayCopy = [...this.favoriteContacts];
   //    arrayCopy.splice(index, 1);
   //    this.favoriteContacts = arrayCopy;
   //    console.log(this.deleteContact(index));
   //    return this.favoriteContacts;
   // }

   isFav(index) {
      // const index: number = this.contacts.findIndex(
      //    cont => cont.phoneNumber === phoneNumber
      // );
      return this.contacts[index].fav;
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

   }

}

