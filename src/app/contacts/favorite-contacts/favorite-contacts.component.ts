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
   this.favoritecontacts =  this.contactService.getFavorites();
   this.index = this.route.snapshot.params.id;
  }

  ngOnChanges() {
    this.favoritecontacts =  this.contactService.getFavorites();
  }

  onFavEdit(i) {
    this.router.navigate(['favorite-contacts', i], {fragment: 'fav'});
    this.favoritecontacts =  this.contactService.getFavorites();
  }

  onFavDelete(i) {
    const phoneNumber = this.contactService.getFavorites()[i].phoneNumber;
    this.contactService.deleteContact(phoneNumber);
    this.router.navigate(['']);
  }

  onUnFavorite(i) {
    // const phoneNumber = this.contactService.getFavorites()[i].phoneNumber;
    const favoriteIndex = this.contactService.getContactIndex(i);
    this.contactService.reverseFavoriteContact(favoriteIndex);
    this.favoritecontacts = this.contactService.getFavorites();
    this.router.navigate(['']);
  }


}
