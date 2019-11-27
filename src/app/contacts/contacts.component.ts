import { Component, OnInit } from '@angular/core';
import { ContactService } from './shared/contact.service';
import { Contact } from './shared/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  loadedSection = 'Contacts';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelected
    .subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }

  onSelection(section: string) {
    this.loadedSection = section;
  }

}
