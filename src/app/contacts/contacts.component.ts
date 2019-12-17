import { Component, OnInit } from '@angular/core';
import { ContactService } from './shared/contact.service';
import { Contact } from './shared/contact.model';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  // selectedContact: Contact;
  // loadedSection = 'Contacts';
  id: number;
  display = false;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    // this.contactService.contactSelected
    // .subscribe(
    //   (contact: Contact) => {
    //     this.selectedContact = contact;
    //   }
    // );
    this.route.fragment
    .subscribe(
      (fragment: string) => {
        if (fragment === 'Display') {
          this.display = true;
        }
  });
}

  // isLeng() {

  //   length = this.contactService.getContacts().length;
  //   console.log(this.id, length);
  //   if (length >= 0 && length <= this.id) {
  //     return true;
  //   } else { return false; }
  // }

  // onSelection(section: string) {
  //   this.loadedSection = section;
  // }

}
