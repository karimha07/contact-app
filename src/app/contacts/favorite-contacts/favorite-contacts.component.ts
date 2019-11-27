import { Component, OnInit, OnChanges } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite-contacts',
  templateUrl: './favorite-contacts.component.html',
  styleUrls: ['./favorite-contacts.component.css']
})
export class FavoriteContactsComponent implements OnInit, OnChanges {
  index: number;

  favoritecontacts: Contact[] ;
  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.favoritecontacts =  this.contactService.getFavorite();
   this.index = this.route.snapshot.params.id;
  }

  ngOnChanges() {
    this.favoritecontacts =  this.contactService.getFavorite();
  }

  onFavEdit(i) {
    
    this.router.navigate(['favorite-contacts', i]);

  }

  onFavDelete(i) {
    const id = this.contactService.contacts.findIndex(
      contact => contact.phoneNumber === this.contactService.favoriteContacts[i].phoneNumber);
    this.contactService.contacts.splice(id, 1);
    this.favoritecontacts = this.contactService.favoriteContacts.splice(i, 1);
    this.router.navigate(['']);
  }

  onUnFavorite(i) {
    this.favoritecontacts = this.contactService.favoriteContacts.splice(i, 1);
    this.router.navigate(['']);
  }


}
