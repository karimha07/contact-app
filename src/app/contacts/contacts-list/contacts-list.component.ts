import { Component, OnInit, OnDestroy} from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  contacts: Contact[];
  subscription: Subscription;

  constructor(private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
   this.subscription = this.contactService.contactsChanged
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
   this.contacts = this.contactService.getContacts();
  }

  onNewContact() {
    this.router.navigate(['newContact']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
